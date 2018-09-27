import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RemoveSectionService } from '../../services/remove-section.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-affected-persons',
  templateUrl: './affected-persons.component.html',
  styleUrls: ['./affected-persons.component.css']
})
export class AffectedPersonsComponent implements OnInit {
@Language() lang:string;
@Input('group')
public affectedPersonsFrmGrp:FormGroup;
  constructor(
	  private _fb:FormBuilder,
	  private removeSectionService:RemoveSectionService,
	  public locale: LocaleService, 
	  ) { }

  ngOnInit() {
	var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }
 addAffectedPerson()
	{
		const control = <FormArray>this.affectedPersonsFrmGrp.get('affectedPerson');
	  control.push(this._fb.group({
      incidentExperiencedDate:[],
			lkpGenderId:[],
			ageRange:[],
			lkpIncidentTypeId:[],
			lkpInjuryTypeId:[],
			lkpTreatmentTypeId:[],
			lkpBodyPartId:[],
			ageMths:[],
			ageYrs:[],
			ageMths_temp:[]
	}));
	
	}
removeAffectedPerson(i:number)
	{
		var sectionNum=i+1;
	//	var message="Are you sure you want to remove the affected Person " + sectionNum;	
	var message='removeAffectedPerDialogueMsg' + sectionNum;	
		this.removeSectionService.removeSection(message); 
		const control = <FormArray>this.affectedPersonsFrmGrp.get('affectedPerson');
		$("#yesBtn").unbind('click');  
    $("#yesBtn").click(function(e)
    {				
    	control.removeAt(i);
    }); 
	}
	
	getAffectedPersons(affectedPersonsFrmGrp)
	{
		return 	affectedPersonsFrmGrp.controls.affectedPerson.controls;
	}

}
