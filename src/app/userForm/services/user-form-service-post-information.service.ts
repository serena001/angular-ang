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
  
  private handleError (errorResp: Response | any) {

    let errorMsg: string;
    if (errorResp instanceof Response) {
      const bodyResponse = errorResp.json();
      const errMessage = bodyResponse.error || JSON.stringify(bodyResponse);
      errorMsg = `${errMessage}`;
    }
    return Observable.throw(errorMsg);
  }
}
