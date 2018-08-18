import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
declare var require: any
//Call external javascript function unescape
declare function unescape(s:string): string;
declare var $:any;
@Injectable()
export class KeycloakRestService {
  	errorMessage="hah";

  constructor (
	private http: Http,
	private _fb:FormBuilder,
		) {} 

	
	getInformation(drpDownRestEndpoint): Observable<any> {	
   return this.http.get(drpDownRestEndpoint)
            .pipe(
            map(this.extractData),
						catchError(this.handleError)); 
	 /*var jsonArray=[{"username": "jimh12","firstName":"jim12","lastName":"hensen12","email":"jim@hensen.com12"},
  {"username": "jimh124","firstName":"jim124","lastName":"hensen124","email":"jim@hensen.com124"}];
 
return of(jsonArray).pipe(map(o => o));*/
	}
addInformation (myForm,serviceEndPoint): Observable<any> {
   var xmlDoc=""; 
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers });
    var url = serviceEndPoint;
 
  return this.http.post(url,myForm,options)
                    .pipe(
                    map(this.extractData),
                    catchError(this.handleError));
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
