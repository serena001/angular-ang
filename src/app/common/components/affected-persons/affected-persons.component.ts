import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RemoveSectionService } from '../../services/remove-section.service';
declare var $:any;
@Component({
  selector: 'app-affected-persons',
  templateUrl: './affected-persons.component.html',
  styleUrls: ['./affected-persons.component.css']
})
export class AffectedPersonsComponent implements OnInit {
@Input('group')
public affectedPersonsFrmGrp:FormGroup;
  constructor(private _fb:FormBuilder,private removeSectionService:RemoveSectionService) { }

  ngOnInit() {
  }
 addAffectedPerson()
	{
		const control = <FormArray>this.affectedPersonsFrmGrp.get('affectedPerson');
	  control.push(this._fb.group({
      incidentExperiencedDate:['2017-03-23'],
			lkpGenderId:['52393'],
			ageRange:['1'],
			lkpIncidentTypeId:['52122'],
			lkpInjuryTypeId:['52144'],
			lkpTreatmentTypeId:['52302'],
			lkpBodyPartId:['51595'],
			ageMths:['23'],
			ageYrs:[' '],
			ageMths_temp:[' ']
	}));
	
	}
removeAffectedPerson(i:number)
	{
		var sectionNum=i+1;
		var message="Are you sure you want to remove the affected Person " + sectionNum;	
		this.removeSectionService.removeSection(message); 
		const control = <FormArray>this.affectedPersonsFrmGrp.get('affectedPerson');
//		$("#yesBtn").unbind('click');  
//    $("#yesBtn").click(function(e)
//    {				
    	control.removeAt(i);
//    }); 
	}
	getAffectedPersons(affectedPersonsFrmGrp)
	{
		return 	affectedPersonsFrmGrp.controls.affectedPerson.controls;
	}

}
