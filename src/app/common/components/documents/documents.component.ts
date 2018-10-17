import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../../services/document.service';
import { RemoveSectionService } from '../../services/remove-section.service';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
@Input('group')
public documentsFrmGrp:FormGroup;
@Language() lang:string;

  constructor(
    private _fb: FormBuilder,
    private removeSectionService:RemoveSectionService,
          public locale: LocaleService, 
    public translation:TranslationService){}
	

  ngOnInit() {
    var language = $( "html" ).attr("lang"); 
           this.locale.setCurrentLanguage(language);
  }
	removeDocument(i:number)
	{ 
    var sectionNum=i+1;
    var language = $( "html" ).attr("lang"); 
    let message="";
    if(language=="en")
		{
			message="Are you sure you want to remove Document# " + sectionNum
		}
		else if(language=="fr")
		{
			message="Êtes-vous certain de vouloir enlever les renseignements pour le document #  " + sectionNum
		}
		this.removeSectionService.removeSection(message); 
		const control = <FormArray>this.documentsFrmGrp.get('document');
		$("#yesBtn").unbind('click');  
    $("#yesBtn").click(function(e)
   {					 console.log(" I am here1111" + i);
    	control.removeAt(i);
    }); 
    console.log(" I am here" + i);
	}
 getDocuments(documentsFrmGrp)
 {
   return documentsFrmGrp.controls.document.controls;
 }

}
