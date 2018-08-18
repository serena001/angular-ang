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
//declare function x2js():any;
declare var require: any
//var fs = require('fs');
//var path = require('path');
//var xml2js = require('xml2js');
var _ = require('lodash');
//Call external javascript function unescape
declare function unescape(s:string): string;
declare var $:any;
@Injectable()
export class ProceedToSubmitFormService {
 	errorMessage="hah";
  //private formUrl = 'http://10.224.4.20:20130/external/services/rest/submitXMLForm';
  //private formUrlRetrieval='js/testingReceivingJson2.json';
  //private formUrlRetrieval='http://localhost:4200/js/testingReceivingJson2.json';
  constructor (
	private http: Http,
	private _fb:FormBuilder,
	private importInformationService:ImportInformationService,
	private documentService:DocumentService,
	private affectedPersonService:AffectedPersonService
		) {} 

  //	 removeValuesArr=[{"name":"lstCountry"},{"name":"otherCountry"},{"name":"lstProvince"},{"name":"lstState"},
//		{"name":"ageRange"},{"name":"ageYrs"},{"name":"region"},{"name":"ageMths_temp"},{"name":"totalAffectedPersons"},
//		{"name":"assignCaseNo"},{"name":"submissionNo"},{"name":"formEnvironment"},{"name":"submitOption"},{"name":"submitForm"},{"name":"fileDataUrl"}];          
    	 removeValuesArr=[{"name":"lstCountry"},{"name":"otherCountry"},{"name":"lstProvince"},{"name":"lstState"},
		{"name":"ageRange"},{"name":"ageYrs"},{"name":"region"},{"name":"ageMths_temp"},{"name":"totalAffectedPersons"},
		{"name":"assignCaseNo"},{"name":"submissionNo"},{"name":"formEnvironment"},{"name":"submitOption"},{"name":"submitForm"}];          
       
  	 
           //Send information to Radar
 submitForm (myFormCopy:any,myForm:any,formIdentifier,formEnvironment,nameSpace,serviceEndPoint): Observable<any> {
   var xmlDoc="";
 /** var builder = new xml2js.Builder({headless:true});
  xmlDoc = builder.buildObject(myFormCopy);
  xmlDoc=xmlDoc.replace("<root>","").replace("</root>","");
  xmlDoc = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><package xmlns=\"" + nameSpace + "\">" + xmlDoc + "</package>";
				var boundary = '--13758877493679251113282846'
				var formData = boundary + '\r\n';
				formData += 'Content-Disposition: form-data; name="formid"\r\n';
				formData += '\r\n';
				formData += formIdentifier + "_" + formEnvironment + '\r\n';
				formData += boundary + '\r\n';
				formData += 'Content-Disposition: form-data; name="report"; filename="report"\r\n';
				formData += 'Content-Type: application/octet-stream\r\n';
				formData += '\r\n';
				formData += xmlDoc + '\r\n';
        
				var documents = myForm.get('documents.document').value;
				for(var i = 0; i < documents.length; i++) {
					var document = documents[i];
					formData += boundary + '\r\n';
					formData += 'Content-Disposition: form-data; name="attachments"; filename*=UTF-8\'\'' + encodeURIComponent(document.fileName) + '\r\n';
					formData += 'Content-Type: application/octet-stream\r\n';
					formData += 'Content-Transfer-Encoding: base64\r\n';
					formData += '\r\n';
					var dataBlock = document.fileDataUrl;
					formData += dataBlock.substring(dataBlock.search("base64,")+7) + '\r\n';
				}
				formData += boundary + '--\r\n';
				formData += '\r\n'; 
**/
var formData=myFormCopy;
 //   let headers = new Headers({'Content-Type': 'multipart/form-data; boundary=13758877493679251113282846',
//						'Content-Length': formData.length})
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers });
    var url = serviceEndPoint;
	/*return this.http.post(url,formData,options)
					.pipe(
                    map(this.extractData),
					catchError(this.handleError));*/
					var jsonArray={"form":{"formLang":512051,"formIdentifier":"CPS-SPC-0006.08","assignCaseNo":"2017-001249","submissionNo":"2017-03-23-000001"}};
					return of(jsonArray).pipe(map(o => o));
  }  
 
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString(); 
    }
  
    return Observable.throw(errMsg);
  }
save(myForm:FormGroup,formIdentifier,formEnvironment,nameSpace,serviceEndPoint) 
	{		
	var thisVar=this;
	var removeValuesArr;
	var boundary = '--13758877493679251113282846'
	var myFormCopy = _.cloneDeep(myForm);
//$("#hcform").validate({
//errorElement: "em",
// errorClass: "invalid",
//   errorContainer: "#messageBox1, #messageBox2",
//  errorLabelContainer: "#messageBox1 ul",
//  wrapper: "li", debug:true,
 // errorPlacement: function(error, element) {
 //   error.appendTo( element.parent("td").next("td") );
//  },
 


//$("#hcform").valid();
		$("#hcform").data("validator").settings.submitHandler = function () 
		{ 
	//	submitHandler: function() {      	 		
			removeValuesArr=thisVar.removeValuesArr;
			for(var i=0; i<removeValuesArr.length;i++)
			{
				thisVar.removeFields(myFormCopy.value,removeValuesArr[i].name);
        		thisVar.stripBlanks(myFormCopy.value);
			}
			thisVar.submitForm(myFormCopy.value,myForm,formIdentifier,formEnvironment,nameSpace,serviceEndPoint).subscribe(data=>thisVar.processExternServiceResponse(data,myFormCopy),                     
						error =>  thisVar.errorMessage = <any>error);	
	//	};
		}
//	});
		return false;
	}

   	//Send a request to the server and retrieved a response
	processExternServiceResponse(data:any,myForm:any)
  	{	console.log(data);
		var control = <FormGroup>myForm.controls["submitForm"];		
		var caseNumber=data.form.caseNumber;
		var submissionNumber=data.form.submissionNumber;
		var message="Confirmation: Online submission was successful. Assigned Case Number(s) is/are: " + caseNumber + " and assigned Submission Number is: " + submissionNumber + ".";	
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
