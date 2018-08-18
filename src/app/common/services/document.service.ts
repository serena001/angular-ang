import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lkpInfoResourceTypeIds } from './documentDrpDown';
@Injectable()
export class DocumentService {

  constructor(private _fb:FormBuilder) { }
getLkpInfoResourceTypeIds():Promise<any> {
    return Promise.resolve(lkpInfoResourceTypeIds);

  }

ngInitDefaultValue=	this._fb.group({infoResourceTitle:[''],lkpInfoResourceTypeId:[''], fileName:[''],fileDataUrl:['']});
ngInitDefaultValueNoFormGroup={infoResourceTitle:[''],lkpInfoResourceTypeId:[''], fileName:[''],fileDataUrl:['']};
}
