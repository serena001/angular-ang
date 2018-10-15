import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../services/document.service';
import { SubmissionService } from '../services/submission.service';
import { ProductService } from '../services/product.service';
import { ImportInformationService } from '../services/import-information.service';
import { AffectedPersonService } from '../services/affected-person.service';
import { jsonpCallbackContext } from '../../../../node_modules/@angular/common/http/src/module';
declare var require: any
var _ = require('lodash');
//Call external javascript function unescape
declare function unescape(s:string): string;
declare var $:any;
@Injectable()
export class ProceedToSubmitFormService {
 	errorMessage="hah";
  constructor (
	private http: Http,
	private _fb:FormBuilder,
	private importInformationService:ImportInformationService,
	private documentService:DocumentService,
	private affectedPersonService:AffectedPersonService
		) {} 

    	 removeValuesArr=[{"name":"lstCountry"},{"name":"otherCountry"},{"name":"lstProvince"},{"name":"lstState"},
		{"name":"ageRange"},{"name":"ageYrs"},{"name":"region"},{"name":"ageMths_temp"},{"name":"totalAffectedPersons"},
		{"name":"assignCaseNo"},{"name":"submissionNo"},{"name":"formEnvironment"},{"name":"submitOption"},{"name":"submitForm"}];          
       
  	 
           //Send information to Radar
 submitForm (myFormCopy:any,myForm:any,formIdentifier,formEnvironment,nameSpace,serviceEndPoint): Observable<any> {
   var xmlDoc="";

var formData=myFormCopy;
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers });
    var url = serviceEndPoint;
	return this.http.post(url,formData,options)
					.pipe(
                    map(this.extractData),
					catchError(this.handleError));
				/** 	var jsonArray={"formLang":512051,"formIdentifier":"CPS-SPC-0006.08","caseNumber":"2017-001249","submissionNumber":"2017-03-23-000001"};
					return of(jsonArray).pipe(map(o => o));**/
  }  
 
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  
  private handleError (errorResp: Response | any) {

    let errorMsg: string;
    if (errorResp instanceof Response) {
    //  const bodyResponse = errorResp.json();
    //  const errMessage = bodyResponse.error || JSON.stringify(bodyResponse);
	  errorMsg = errorResp.toString();	  
	}
	console.log("error" + errorResp);
    return Observable.throw(errorMsg);
  }
save(myForm:FormGroup,formIdentifier,formEnvironment,nameSpace,serviceEndPoint) 
	{		
	var thisVar=this;
	var removeValuesArr;
	var boundary = '--13758877493679251113282846'
	var myFormCopy = _.cloneDeep(myForm);

 
		$("#hcform").data("validator").settings.submitHandler = function () 
		{ 
    	 		
			removeValuesArr=thisVar.removeValuesArr;
			for(var i=0; i<removeValuesArr.length;i++)
			{
				thisVar.removeFields(myFormCopy.value,removeValuesArr[i].name);
        		thisVar.stripBlanks(myFormCopy.value);
			}
			thisVar.submitForm(myFormCopy.value,myForm,formIdentifier,formEnvironment,nameSpace,serviceEndPoint).subscribe(data=>thisVar.processExternServiceResponse(data,myFormCopy),                     
						error =>  thisVar.errorMessage = <any>error);	
				
		}

		return false;
	}

   	//Send a request to the server and retrieved a response
	processExternServiceResponse(data:any,myForm:any)
  	{	console.log(data);
		var control = <FormGroup>myForm.controls["submitForm"];		
		var caseNumber=data.caseNumber;
		var submissionNumber=data.submissionNumber;
		let lang = $( "html" ).attr("lang"); 
		let message;
		if(lang=="en")
		{
			message="Confirmation: Online submission was successful. Assigned Case Number(s) is/are: " + caseNumber + " and assigned Submission Number is: " + submissionNumber + ".";	
		}
		else if(lang="fr")
		{
			message="Confirmation : La soumission en ligne est un succès. Le(s) numero de cas attribué(s) est ou sont : " + caseNumber + " et le numero de soumission attribué est : " + submissionNumber + ".";	
		}
		
		$(".messageTitle").html("Message");
        $(".messageBody").html(message);		
		$("#messageDialogueNoBtn").trigger("open.wb-lbx", [ [ { src: "#messageDialogueNoBtn", type: "inline" } ] ,true]);		
		control.patchValue(data);
  	}
 //This is for retrieving from Radar
	retrieveFormInformationRadar(myForm:FormGroup,formUrlRetrieval1,repeatSections)
	{
		this.getFormInformationRadar(formUrlRetrieval1).subscribe(data=>this.extractDataRetrieval(data,myForm,repeatSections),                     
							error =>  this.errorMessage = <any>error);							
	}
	getFormInformationRadar (formUrlRetrieval1): Observable<any> {	
		//return this.http.get(formUrlRetrieval1,{withCredentials:true})
		return this.http.get(formUrlRetrieval1)
						.pipe(
						map(this.extractData),
						catchError(this.handleError));
	}

 private extractDataRetrieval(data:any,myForm:any,repeatSections) {
	 myForm.reset();
	var jsonDoc=data;
	var length;
         						for (var name in jsonDoc) 
						{
							if(jsonDoc.hasOwnProperty(name)) {
								const control = myForm.controls[name];       
								var found=0;
								var parent="";
								var child="";
								var objectPath="";
								var defaultValue="";
								for(var j=0;j<repeatSections.length;j++)
								{
									if(repeatSections[j].parent==name)
									{
										parent=repeatSections[j].parent;
								 		child=repeatSections[j].child;
								 		objectPath=repeatSections[j].objectPath;
								 		defaultValue=repeatSections[j].defaultValue;
										found=1;
										break;
									}
								}
								if(found==1)
								{
									var controls:FormArray;											
									var controls=<FormArray>control.get(eval(child));
									var i:number=controls.length;
									while(i>=0)
									{
										controls.removeAt(i);
										i--;
									}	
									length=this.findLengthOfJsonArray(objectPath,jsonDoc);
									for(var i=0; i<length;i++)
									{
										controls.push(this._fb.group(eval(defaultValue)));
									}
								}									   
								control.patchValue(jsonDoc[name]);
							}
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
