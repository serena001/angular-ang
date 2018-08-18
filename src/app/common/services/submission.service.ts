import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lstFoodTypes } from './submissionDrpDown';
import { lstFdSubTypesAdditive } from './submissionDrpDown';
import { lstFdSubTypesFormula } from './submissionDrpDown';
import { lstFdSubTypesNovelFd } from './submissionDrpDown';

@Injectable()
export class SubmissionService {

  constructor(private _fb: FormBuilder) { }
    getLstFoodTypes():Promise<any> {
    return Promise.resolve(lstFoodTypes);
    }
    getLstFdSubTypesAdditive():Promise<any> {
    return Promise.resolve(lstFdSubTypesAdditive);
    }
    getLstFdSubTypesFormula():Promise<any> {
    return Promise.resolve(lstFdSubTypesFormula);
    }
    getLstFdSubTypesNovelFd():Promise<any> {
    return Promise.resolve(lstFdSubTypesNovelFd);
    }
ngInitDefaultValue=this._fb.group({
					prgrmId: ['1'],     
          lkpCaseTypeId:['51605'],
          lkpCaseSubtypeId:["51628"],
           subjectDefId:['1'],
			     lkpSubmissionTypeId:['1531'],
          });

ngInitDefaultValueFood=this._fb.group({
					prgrmId: ['2'],     
          lkpCaseTypeId:['51605'],
          lkpCaseSubtypeId:["51628"],
           subjectDefId:['1'],
			     lkpSubmissionTypeId:['1531'],
          });
}
