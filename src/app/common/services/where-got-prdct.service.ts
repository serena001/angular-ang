import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lstProductFromWhom } from './whereGotPrdctDrpDown';

@Injectable()
export class WhereGotPrdctService {

  constructor(private _fb: FormBuilder) { }
    getLstProductFromWhom():Promise<any> {
    return Promise.resolve(lstProductFromWhom);
    }
ngInitDefaultValue=this._fb.group({  organizationName:[''],personName:[''],address:[''],city: [''],postalCode:[''],email:[''],telephoneNumber:[''],
           						faxNumber:[''],website:[''],lstCountry:[""],otherCountry:[ ''],lstProvince:[""],lstState:[""],region:[''],
				provinceRegion:[''],country:[''],acquiredProductDate:[''],lkpContactContextId:[""], titleWithinOrganization:[""]})				
ngInitDefaultValueIndustry=this._fb.group({  organizationName:[''],personName:[''],address:[''],city: [''],postalCode:[''],email:[''],telephoneNumber:[''],
           						faxNumber:[''],website:[''],lstCountry:[""],otherCountry:[ ''],lstProvince:[""],lstState:[""],region:[''],
				provinceRegion:[''],country:[''],acquiredProductDate:[''],lkpContactContextId:[""], titleWithinOrganization:[""],quantityOfProduct:[''],countryOfOrigin:[''],
      productionBeginDate:[''],productionEndDate:[''],distributionBeginDate:[''],distributionEndDate:[''],retailSaleBeginDate:[''],retailSaleEndDate:[''],
    })	
}
