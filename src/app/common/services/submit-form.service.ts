import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lstSubmitOption } from './submitFormDrpDown';
@Injectable()
export class SubmitFormService {

  constructor(private _fb: FormBuilder) { }
    getLstSubmitOption():Promise<any> {
    return Promise.resolve(lstSubmitOption);
    }
  ngInitDefaultValue=this._fb.group({"submissionNumber":"","caseNumber":"","formIdentifier":"CPS-SPC-0001.08","submitOption":""});
}
 

