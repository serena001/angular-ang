import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
@Language() lang:string;
@Input('group')
public submitFormfrmGrp:FormGroup
  lstSubmitOption;
  constructor(
		private submitFormService: SubmitFormService,
		public locale: LocaleService ) { }

   showOption1:boolean=true;
  showOption2:boolean=true;

  ngOnInit() {
		var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
      this.submitFormService.getLstSubmitOption().then(lstSubmitOption => this.lstSubmitOption = lstSubmitOption);
  }
setOption($event,value)
	{	

			if(value=="0")
			{
				this.showOption1=true;
			  this.showOption2=false;
			}
			else if(value=="2" )
			{
					this.showOption1=false;
			  this.showOption2=true;
			}
      else
      {
	      this.showOption1=true;
			  this.showOption2=true;
      }
				
	}
}
