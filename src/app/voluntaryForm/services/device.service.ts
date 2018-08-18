import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class DeviceService {

  constructor(private _fb: FormBuilder) { }
      ngInitDefaultValue=this._fb.group({
						device:this._fb.array([
						{
          assignCaseNo:[""],
          productBrandName:[""],
          productLicenseNumber:[""],
          modelNumber:[""],
          serialNumber:[""],
          batchNumber:[""],
          upc:[""],
          dateCode:[""],
          softwareNameAndVersion:[""],
          manufacturer:this._fb.group({ 
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
	lkpContactContextId:"",
  titleWithinOrganization:[""]}),
          retailer:this._fb.group({ 
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
	lkpContactContextId:"",
  titleWithinOrganization:[""]}),
			}])
					}) 
}


