import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

  @Injectable()
export class ContactService {
  private contactsUrl = '/js/testingJson.json';  // URL to web API
  constructor (private http: Http,private _fb: FormBuilder) {}

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
  titleWithinOrganization:[""]}
  );

}
