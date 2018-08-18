import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class FormService {
  constructor (
	private _fb:FormBuilder,
		) {} 

ngInitDefaultValue=this._fb.group({
	formIdentifier:["CPS-SPC-0001.08"],
    formLang:["512051"],
    assignCaseNo:[""],
	submissionNo:[""]});
}
