import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../../services/document.service';
import { AffectedPersonService } from '../../services/affected-person.service';
import { ProceedToSubmitFormService } from '../../services/proceed-to-submit-form.service';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
import {ImportInformationService} from '../../services/import-information.service';
declare var $:any;
@Component({
  selector: 'app-how-to-import',
  templateUrl: './how-to-import.component.html',
  styleUrls: ['./how-to-import.component.css']
})
export class HowToImportComponent implements OnInit {
 @Input('form')
  public myForm:any;
  @Language() lang:string;
  constructor(
	  private _fb:FormBuilder,
	  private documentService:DocumentService,
	  private affectedPersonService:AffectedPersonService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
		private importInformationService:ImportInformationService,
      public locale: LocaleService, 
    public translation:TranslationService){}

  ngOnInit() {
	var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }
  	//Import an hcxs/json file to the form
	public importFormData(event: EventTarget) 
	{
		let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
		let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
		let files: FileList = target.files;
       var repeatSections=  this.importInformationService.repeatSections;
			if(!!files) 
			{		
				this.myForm.reset();	
				var tempVarForThis=this;
				var reader = new FileReader();
				reader.onload = function() 
				{ 
					var jsonBuffer = reader.result;
					try
					{
						var length;
						var jsonDoc = JSON.parse(jsonBuffer);
						for (var name in jsonDoc) 
						{
							if(jsonDoc.hasOwnProperty(name)) {
								const control = tempVarForThis.myForm.controls[name];        
								var found=0;
								var parent="";
								var child="";
								var objectPath="";
								var defaultValue="";
								for(var j=0;j<repeatSections.length;j++)
								{
									if(repeatSections[j].parent==name)
									{
										parent=repeatSections[j].parent;
								 		child=repeatSections[j].child;
								 		objectPath=repeatSections[j].objectPath;
								 		defaultValue=repeatSections[j].defaultValue;
										found=1;
										break;
									}
								}
								if(found==1)
								{
									var controls:FormArray;											
									var controls=<FormArray>control.get(eval(child));
									var i:number=controls.length;
									while(i>=0)
									{
										controls.removeAt(i);
										i--;
									}	
									length=tempVarForThis.proceedToSubmitFormService.findLengthOfJsonArray(objectPath,jsonDoc);
									for(var i=0; i<length;i++)
									{
										controls.push(tempVarForThis._fb.group(eval(defaultValue)));
									}
								}						   
								control.patchValue(jsonDoc[name]);
							}
					}
					}catch(e){}
				}
				reader.onerror = function(){}
				reader.readAsText(files[0]);					
			} 
			else 
			{

			}
	}
}
