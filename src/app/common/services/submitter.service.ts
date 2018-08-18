import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lkpReltnshpAffctdPrsnIds } from './submitterDrpDown';
import { lkpContactContextIds } from './submitterDrpDown';

@Injectable()
export class SubmitterService {

  constructor(private _fb: FormBuilder) { }
    getLkpReltnshpAffctdPrsnIds():Promise<any> {
    return Promise.resolve(lkpReltnshpAffctdPrsnIds);
    }
	getLkpContactContextIds():Promise<any> {
    return Promise.resolve(lkpContactContextIds);
    }
ngInitDefaultValue=this._fb.group({ 
	personName:[''],
	address:[''],
	city: [''], 
	postalCode:[''],
	email:[''],
	telephoneNumber:[''],
	faxNumber:[''],
	lkpReltnshpAffctdPrsnId:[""],
	lstCountry:[""],
	otherCountry:[ ''],
	lstProvince:[""],
	lstState:[""],
	region:[''],
	provinceRegion:[''],
	country:[''],
	lkpPersonalInfoReleaseId:"",
	lkpContactContextId:"51746"});

	ngInitDefaultValueIndustry=this._fb.group({ 
	organizationName:[''],
	personName:[''],
	address:[''],
	city: [''], 
	postalCode:[''],
	email:[''],
	telephoneNumber:[''],
	faxNumber:[''],
	website:[''],
	lkpReltnshpAffctdPrsnId:[""],
	lstCountry:[""],
	otherCountry:[ ''],
	lstProvince:[""],
	lstState:[""],
	region:[''],
	provinceRegion:[''],
	country:[''],
	lkpPersonalInfoReleaseId:"",
	lkpPrivacyNoticeCbiId:"",
	lkpContactContextId:"51746",
	 titleWithinOrganization:[""],

quantityOfProduct:[""],
countryOfOrigin:[""],
productionBeginDate:[""],
productionEndDate:[""],
distributionBeginDate:[""],
distributionEndDate:[""],
retailSaleBeginDate:[""],
	retailSaleEndDate:[""]}
);
}
