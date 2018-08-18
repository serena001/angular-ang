import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lkpGenderIds } from './affectedPersonDrpDown';
import { lstAgeRange } from './affectedPersonDrpDown';
import { lkpIncidentTypeIds } from './affectedPersonDrpDown';
import { lkpInjuryTypeIds } from './affectedPersonDrpDown';
import { lkpTreatmentTypeIds } from './affectedPersonDrpDown';
import { lkpBodyPartIds } from './affectedPersonDrpDown';
@Injectable()
export class AffectedPersonService {

  constructor(private _fb:FormBuilder) { }

  getLkpGenderIds():Promise<any> {
    return Promise.resolve(lkpGenderIds);

  }
   getLstAgeRange():Promise<any>{
     return Promise.resolve(lstAgeRange);
  }
   getLkpIncidentTypeIds():Promise<any>{
     return Promise.resolve(lkpIncidentTypeIds);
  }
     getLkpInjuryTypeIds():Promise<any>{
     return Promise.resolve(lkpInjuryTypeIds);
  }
       getLkpTreatmentTypeIds():Promise<any>{
     return Promise.resolve(lkpTreatmentTypeIds);
  }
         getLkpBodyPartIds():Promise<any>{
     return Promise.resolve(lkpBodyPartIds);
  }
  ngInitDefaultValue=this._fb.group({
	incidentExperiencedDate:['2017-03-23'],
	lkpGenderId:[' '],
	ageRange:[' '],
	lkpIncidentTypeId:[' '],
	lkpInjuryTypeId:[' '],
	lkpTreatmentTypeId:[' ']
	,lkpBodyPartId:[' '],
	ageMths:['9'],
	ageYrs:[' '],
	ageMths_temp:[' ']
        })
  ngInitDefaultValueNoFormGroup={
	incidentExperiencedDate:['2017-03-23'],
	lkpGenderId:[' '],
	ageRange:[' '],
	lkpIncidentTypeId:[' '],
	lkpInjuryTypeId:[' '], 
	lkpTreatmentTypeId:[' ']
	,lkpBodyPartId:[' '],
	ageMths:['9'],
	ageYrs:[' '],
	ageMths_temp:[' ']
        }

}
