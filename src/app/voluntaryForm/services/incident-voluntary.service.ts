import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class IncidentVoluntaryService {

   constructor(private _fb: FormBuilder) { }
ngInitDefaultValue=this._fb.group({
	lkpNatureOfComplaintId:[""],
    lkpReactnInjuryDeathFlgId:[""],
occuredDate:[""],
description:[""]}
);

}
