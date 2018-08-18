import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class MeasureService {
lstCorrectiveMeasure=[ "Yes", "No"]
  constructor(private _fb: FormBuilder) { }
ngInitDefaultValue=this._fb.group({
	correctiveMeasureRquiredFlg:[""],
    correctiveMeasureExplanation:[""],
otherProductsIncident:[""]}
);
}
