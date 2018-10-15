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
export class RetrieveDrpDownRestServiceService {

  	errorMessage="hah";

  constructor (
	private http: Http,
	private _fb:FormBuilder,
		) {} 

	
	getDrpDownInformation(drpDownRestEndpoint): Observable<any> {	
  return this.http.get(drpDownRestEndpoint)
            .pipe(
            map(this.extractData),
						catchError(this.handleError));
 	   /* var jsonArray={"lstReportTypes":{"lstReportTypes":[
            {"id": "52386", "name": "New23456789aa"}, 
         {"id": "52387", "name": "Update789a"} 
    ]}};
 
return of(jsonArray).pipe(map(o => o));*/
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
