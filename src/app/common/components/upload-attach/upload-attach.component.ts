import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../services/submitter.service';
import { DocumentService } from '../../services/document.service';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-upload-attach',
  templateUrl: './upload-attach.component.html',
  styleUrls: ['./upload-attach.component.css']
})
export class UploadAttachComponent implements OnInit{
@Input('form')
  public myForm:any;
	@Language() lang:string;
  constructor(
		private _fb: FormBuilder,
		private documentService:DocumentService,
		public locale: LocaleService, 
    public translation:TranslationService){}
		
errorMessage:string;
successMessage:string;
showSuccess:any=true;
showError:any=true;
  ngOnInit() {
		var language = $( "html" ).attr("lang");
		this.locale.setCurrentLanguage(language);
	  this.showSuccess=true;
		this.showError=true;
  }
	//Upload documents to the form
	public uploadFiles(event: any) 
	{
		let fileNameLstSuccess=[];
		let fileNameLstError=[];
		let files = [].slice.call(event.target.files);
		const control = <FormArray>this.myForm.get('documents.document');
		var errorMessage1="The document(s) was not attached ";
		var language = $( "html" ).attr("lang");
		var successMsg="";
		if(language=="en")
		{
			successMsg="Confirmation: The document(s) selected was attached successfully to the online form:";
		}
		else if(language=="fr")
		{
			successMsg="Confirmation: Le document sélectionné a été ajouté avec succès au formulaire en ligne:";
		}
	
			if (files && files.length) 
			{
				var fileMessage = "Confirmation";
				fileNameLstSuccess.push(successMsg);
				var tempVarForThis=this;
				for(var i=0; i<files.length; i++)
				{
					var reader = new FileReader();
					var filename=files[i].name;
					reader.onerror = function(){
						fileNameLstError.push(filename);
						tempVarForThis.showError=false;
					}
				this.processFile(reader,tempVarForThis,filename,control);
				reader.readAsDataURL(files[i]);
				fileNameLstSuccess.push(filename);
				}
			tempVarForThis.successMessage=fileNameLstSuccess.toString();
			this.showSuccess=false;
			tempVarForThis.errorMessage=fileNameLstError.toString();
			}
  	}
  	//Process the uploaded documents
 	public processFile(reader:FileReader,tempVarForThis:any,filename:String,control:FormArray)
  	{
	  	reader.onload = function() 
		{
			var fileDataUrl=reader.result;
			control.push(tempVarForThis.initDocumentWithStr(filename,fileDataUrl));
		}
  	}
	public  initDocumentWithStr(filename:String,fileDataUrl:any)
	{
		return this._fb.group({infoResourceTitle:[' '],lkpInfoResourceTypeId:[' '],fileName:filename,fileDataUrl:fileDataUrl});
	}
} 
