import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AffectedPersonService } from '../../services/affected-person.service';
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
		public locale: LocaleService) { }

  ngOnInit() {
	var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  this.affectedPersonService.getLkpGenderIds().then(lkpGenderIds => this.lkpGenderIds = lkpGenderIds);
  this.affectedPersonService.getLstAgeRange().then(lstAgeRange => this.lstAgeRange = lstAgeRange);
	this.affectedPersonService.getLkpIncidentTypeIds().then(lkpIncidentTypeIds => this.lkpIncidentTypeIds = lkpIncidentTypeIds);
	this.affectedPersonService.getLkpInjuryTypeIds().then(lkpInjuryTypeIds => this.lkpInjuryTypeIds = lkpInjuryTypeIds);
  this.affectedPersonService.getLkpTreatmentTypeIds().then(lkpTreatmentTypeIds => this.lkpTreatmentTypeIds = lkpTreatmentTypeIds);
	this.affectedPersonService.getLkpBodyPartIds().then(lkpBodyPartIds => this.lkpBodyPartIds = lkpBodyPartIds); 
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
