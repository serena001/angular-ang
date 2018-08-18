import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { KeycloakRestService } from '../services/keycloak-rest.service';
declare var require: any
var _ = require('lodash');
@Injectable()
export class UserFormRetrieveInformationService {
errorMessage="error";
  constructor(	private http: Http,
	private _fb:FormBuilder,private keycloakRestService:KeycloakRestService) { }

importInfo(myForm:FormGroup,serviceEndPoint,repeatSections) 
	{

	this.keycloakRestService.getInformation(serviceEndPoint).subscribe(data=>this.extractDataRetrieval(data,myForm,repeatSections),                     
						error =>  this.errorMessage = <any>error);
  }
public extractDataRetrieval(data:any,myForm:any,repeatSections) {
	 myForm.reset();
	var jsonDoc=data;
	const control = myForm.controls["user"];
	console.log("ggg" + JSON.stringify(jsonDoc[0]));
	var length;		
	for(var i=0;i<jsonDoc.length;i++)
	{
		control.patchValue(jsonDoc[i]);
	}	
  }

  findLengthOfJsonArray(path:string,jsonDoc:any)
  {  	
	var arr  = path.split('.');    	
	   	var jsonDocArray=jsonDoc;
	        for (var i = 0, max = arr.length-1; i < max; ++i ) {
	           // Make sure the key exists.
	           jsonDocArray[arr[i]] = jsonDocArray[arr[i]] || {};
	           // Move one level deeper.
	           jsonDocArray = jsonDocArray[arr[i]];
	        }
			return jsonDocArray[arr[arr.length-1]].length;
  }
}
