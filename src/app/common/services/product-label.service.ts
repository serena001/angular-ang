import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Injectable()
export class ProductLabelService {

  constructor(private _fb: FormBuilder) { }
  ngInitDefaultValue=this._fb.group({ 
  organizationName:[''],
  personName:[''],
  address:[''],
  city: [''], 
  postalCode:[''],
	email:[''],
  telephoneNumber:[''],
  faxNumber:[''],
  website:[''],
  lkpReltnshpAffctdPrsnId:[],
  lstCountry:[""],
	otherCountry:[ ''],
  lstProvince:[""],
  lstState:[""],
  region:[''],
  provinceRegion:[''],
  country:[''],
  lkpContactContextId:["51765"],
  titleWithinOrganization:[""]}
  );

}
