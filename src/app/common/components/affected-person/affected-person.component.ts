import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AffectedPersonService } from '../../services/affected-person.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-affected-person',
  templateUrl: './affected-person.component.html',
  styleUrls: ['./affected-person.component.css']
})
export class AffectedPersonComponent implements OnInit {
@Language() lang:string;
@Input('group')
public affectedPersonFrmGrp:FormGroup;
@Input('index')
public index:string;
public showAgeMths=true;
public showAgeYrs=true;
lkpGenderIds;
lstAgeRange;
lkpIncidentTypeIds;
lkpInjuryTypeIds;
lkpTreatmentTypeIds;
lkpBodyPartIds;

  constructor(
		private affectedPersonService:AffectedPersonService,
		private _fb:FormBuilder,
		public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
		public locale: LocaleService) { }

  ngOnInit() {
	var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  /** this.affectedPersonService.getLkpGenderIds().then(lkpGenderIds => this.lkpGenderIds = lkpGenderIds);
  this.affectedPersonService.getLstAgeRange().then(lstAgeRange => this.lstAgeRange = lstAgeRange);
	this.affectedPersonService.getLkpIncidentTypeIds().then(lkpIncidentTypeIds => this.lkpIncidentTypeIds = lkpIncidentTypeIds);
	this.affectedPersonService.getLkpInjuryTypeIds().then(lkpInjuryTypeIds => this.lkpInjuryTypeIds = lkpInjuryTypeIds);
  this.affectedPersonService.getLkpTreatmentTypeIds().then(lkpTreatmentTypeIds => this.lkpTreatmentTypeIds = lkpTreatmentTypeIds);
	this.affectedPersonService.getLkpBodyPartIds().then(lkpBodyPartIds => this.lkpBodyPartIds = lkpBodyPartIds); 
**/	
let drpDownLkpGenderIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpGenderIds +"?lang="+language;
let drpDownLstAgeRangeRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstAgeRanges +"?lang="+language;
let drpDownLkpIncidentTypeIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpIncidentTypeIds +"?lang="+language;
let drpDownLkpInjuryTypeIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpInjuryTypeIds +"?lang="+language;
let drpDownLkpTreatmentTypeIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpTreatmentTypeIds +"?lang="+language;
let drpDownLkpBodyPartIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownlkpBodyPartIdDrpDwn +"?lang="+language;

this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpGenderIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpGenderIds"));
this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstAgeRangeRestEndpoint).subscribe(data =>this.formatRestData(data,"lstAgeRange"));
this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpIncidentTypeIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpIncidentTypeIds"));
this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpInjuryTypeIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpInjuryTypeIds"));
this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpTreatmentTypeIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpTreatmentTypeIds"));
this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpBodyPartIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpBodyPartIds"));


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
    if(drpDownName=="lkpGenderIds")
    {
      this.lkpGenderIds =jsonDocParentVal;
    }
    else if(drpDownName=="lstAgeRange")
    {
      this.lstAgeRange =jsonDocParentVal;
		}
		else if(drpDownName=="lkpIncidentTypeIds")
    {
      this.lkpIncidentTypeIds =jsonDocParentVal;
		}
		else if(drpDownName=="lkpInjuryTypeIds")
    {
      this.lkpInjuryTypeIds =jsonDocParentVal;
		}
		else if(drpDownName=="lkpTreatmentTypeIds")
    {
      this.lkpTreatmentTypeIds =jsonDocParentVal;
		}
		else if(drpDownName=="lkpBodyPartIds")
    {
      this.lkpBodyPartIds =jsonDocParentVal;
    }
   
 }

setAgeRange($event,value)
{
  
			if(value=="1")
			{
				this.showAgeMths=true;
				this.showAgeYrs=false;       
			}
			else if(value=="2" )
			{
		    this.showAgeMths=false;
				this.showAgeYrs=true;  
			}		
			else
			{
		    this.showAgeMths=true;
				this.showAgeYrs=true;  
			}	
}

}
