import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { KeycloakRestService } from '../services/keycloak-rest.service';

@Injectable()
export class UserFormServicePostInformationService {
errorMessage:String;
  constructor(	private http: Http,
	private _fb:FormBuilder,private keycloakRestService:KeycloakRestService) { }
addInfo(myForm:any,serviceEndPoint)
{
  this.keycloakRestService.addInformation(myForm,serviceEndPoint).subscribe(data=>this.extractData(data),                     
						error =>  this.errorMessage = <any>error);	
}
  private extractData(res: Response) {
  
    let body = res.json();
     console.log("body2" + JSON.stringify(body));
    return body;
  }
  
  private handleError (error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString(); 
    }
  console.log("errMsg" +errMsg)
    return Observable.throw(errMsg);
  }
}
