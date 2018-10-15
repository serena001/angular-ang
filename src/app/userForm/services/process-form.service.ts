import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
declare var require: any
//var fs = require('fs');
//var path = require('path');
var _ = require('lodash');
//Call external javascript function unescape
declare function unescape(s:string): string;

@Injectable()
export class ProcessFormService {
errorMessage:string;
  constructor(	private http: Http,
	private _fb:FormBuilder,) { }

 submitForm (myFormCopy:any,myForm:any,serviceEndPoint): Observable<any> {
    var formData=myFormCopy; 
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers });
    var url = serviceEndPoint;
	return this.http.post(url,formData,options)
										.pipe(
                    map(this.extractData),
                    catchError(this.handleError));
											 //var jsonArray={"username":"52386", "email": "New23456789"};
										/*	 var jsonArray={"form":{"formLang":512051,"formIdentifier":"CPS-SPC-0001.08","assignCaseNo":"2017-001249","submissionNo":"2017-03-23-000001"}};
 
return of(jsonArray).pipe(map(o => o));*/
  }  
  private extractData(res: Response) {
    let body = res.json();
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
  addInfo(myForm:FormGroup,serviceEndPoint) 
	{		
	var thisVar=this;
	var removeValuesArr;
	var boundary = '--13758877493679251113282846'
	var myFormCopy = _.cloneDeep(myForm); 
  console.log("value");
    thisVar.stripBlanks(myFormCopy.value);			
		thisVar.submitForm(myFormCopy.value,myForm,serviceEndPoint).subscribe(data=>thisVar.processExternServiceResponse(data,myFormCopy),                     
						error =>  thisVar.errorMessage = <any>error);	
		return false;
	}

	deleteInfo(myForm:FormGroup,serviceEndPoint)
	{
			var thisVar=this;
	var removeValuesArr;
	var boundary = '--13758877493679251113282846'
	var myFormCopy = _.cloneDeep(myForm); 
  console.log("value");
    thisVar.stripBlanks(myFormCopy.value);			
		thisVar.submitForm(myFormCopy.value,myForm,serviceEndPoint).subscribe(data=>thisVar.processExternServiceResponse(data,myFormCopy),                     
						error =>  thisVar.errorMessage = <any>error);	
		return false;
	}
 	//Send a request to the server and retrieved a response
	processExternServiceResponse(data:any,myForm:any)
  	{
      console.log("service stuff" + JSON.stringify(data));
    //var control = <FormGroup>myForm.controls["submitForm"];		
//		var caseNumber=data.caseNumber;
//		var submissionNumber=data.submissionNumber;
//		var message="Confirmation: Online submission was successful. Assigned Case Number(s) is/are: " + caseNumber + " and assigned Submission Number is: " + submissionNumber + ".";	
	/*	$(".messageTitle").html("Message");
        $(".messageBody").html(message);		
		$("#messageDialogueNoBtn").trigger("open.wb-lbx", [ [ { src: "#messageDialogueNoBtn", type: "inline" } ] ,true]);	*/	
	//	control.patchValue(data);
  	}
  removeFields(target,removeValue) 
	{	
		if(target) 
		{
			for(var property in target)
			{
				if(target.hasOwnProperty(property)) 
				{
					var value = target[property];
					if(value instanceof Object) 
					{
						this.removeFields(value,removeValue);
						if(property == removeValue) 
						{
							delete target[property];
						}
					}
					if(value instanceof Array) 
					{                    
							for (var i = 0; i < value.length; i++) 
							{
								if(property == removeValue) 
								{
									delete target[property];
								} else 
								{
									this.removeFields(value[i],removeValue);
								}
							}
					}  
					if(property == removeValue) 
					{
						delete target[property];
					}
				}
			}
		}
	}

  //Removes elements with blank values
stripBlanks(target) {
	if(target) {
        for(var property in target) {
            if(target.hasOwnProperty(property)) {
                var value = target[property];
                if(value instanceof Object) {
                    this.stripBlanks(value);
                    if(Object.getOwnPropertyNames(value) .length == 0) {
                        delete target[property];
                    }
                }
                if(value instanceof Array) {
                    if(value.length == 0) {

                        delete target[property];
                    } else {
                        for (var i = 0; i < value.length; i++) {
							if(value[i] == undefined) {
								delete target[property];
							} else {
								this.stripBlanks(value[i]);
							}
                        }
					}
                }
                if (value instanceof Date) {                
                		 var day = ("0" + value.getDate()).slice(-2);
                         var month = ("0" + (value.getMonth() + 1)).slice(-2);
                         var year = value.getFullYear();
                         target[property] = year + "-" + month + "-" + day;                	                   
                }
                if(value == undefined || value == null || value === "" || value === "null") {
                    delete target[property];
                }
            }
		}
	}
}
}
