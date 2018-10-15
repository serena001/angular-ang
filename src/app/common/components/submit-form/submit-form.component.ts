import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
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
		public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
		public locale: LocaleService ) { }

   showOption1:boolean=true;
  showOption2:boolean=true;

  ngOnInit() {
		var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
			//this.submitFormService.getLstSubmitOption().then(lstSubmitOption => this.lstSubmitOption = lstSubmitOption);
	let drpDownLstSubmitOptionRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstSubmitOptions +"?lang="+language;
	this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstSubmitOptionRestEndpoint).subscribe(data =>this.formatRestData(data,"lstSubmitOption"));
		
	}
	formatRestData(data,drpDownName)
 {
    let jsonDoc=data;
    let jsonDocParent=jsonDoc[drpDownName];
    let jsonDocParentVal;
    if(jsonDocParent==undefined)
    {
      jsonDocParentVal=jsonDocParent;
    }
    else{
      jsonDocParentVal=jsonDocParent[drpDownName];
    }
    if(drpDownName=="lstSubmitOption")
    {
      this.lstSubmitOption =jsonDocParentVal;
    }
  
   
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
