import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lstHowAwares } from './adminDrpDown';
import { lstIncidentReportedTo } from './adminDrpDown';
import { lstHowAwaresIndustry } from './adminDrpDown';
@Injectable()
export class AdminService {

  constructor(private _fb: FormBuilder) { }
 getLstHowAwares():Promise<any> {
    return Promise.resolve(lstHowAwares);

  }
   getLstIncidentReportedTo():Promise<any>{
     return Promise.resolve(lstIncidentReportedTo);
  }
   getLstHowAwaresIndustry():Promise<any>{
     return Promise.resolve(lstHowAwaresIndustry);
  }

ngInitDefaultValue=this._fb.group({lkpHowAwareIncdtId:[''],lkpReportedIncidentId:['']})
ngInitDefaultValueIndustry=this._fb.group({lstHowAwaresIndustry:[''],lkpReportedIncidentId:['']})
}
