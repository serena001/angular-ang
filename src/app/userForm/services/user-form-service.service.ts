import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class UserFormServiceService {
constructor (
	private _fb:FormBuilder,
		) {} 
submitFormDefaults=
  {
     // "keyCloakServiceEndPoint": "http://localhost:8083/user?username=PANMON", 
   //   "keyCloakServicePostEndPoint": "http://localhost:8083/user?username=PANMON", 
     "keyCloakServiceEndPoint": "/viewKC", 
      "keyCloakServicePostEndPoint": "/addKC",  
      "keyCloakServiceDeleteEndPoint" :"/deleteKC"    
  }
ngInitDefaultValue=this._fb.group({
	username:[""],
    firstName:[""],
    lastName:[""],
	email:[""]});
 repeatSections=[];
 

}
