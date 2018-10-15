import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../../common/services/document.service';
import { AffectedPersonService } from '../../common/services/affected-person.service';

@Injectable()
export class ConsumerFormService {
errorMessage="error";
data;
  constructor(	private http: Http,		private _fb: FormBuilder,	  private documentService:DocumentService,
	private affectedPersonService:AffectedPersonService) { }
submitFormDefaults=
  {
       "formIdentifier": "CPS-SPC-0001.08", 
       "formEnvironment": "PROD",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/CPS-SPC-0001.08",
      // "externalServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
      // "externalServiceEndPoint": "https://hcxs.hc-sc.gc.ca/external/services/rest/submitXMLForm",      
      // "radarServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
      "radarServiceEndPoint": "http://localhost:8083/JsonObjectDocRetrieval1",
       "externalServiceEndPoint": "http://localhost:8086/formSubmit",
     //  "defaultIndexHtmlUrlEn": "http://localhost:8083/dist/en/index.html",
		  "defaultIndexHtmlUrlEn": "http://localhost:8082/dist/en/index.html",
       "defaultIndexHtmlUrlFr": "http://localhost:8082/dist/fr/index.html",
			 "serviceEndpointEdit" :"/edit",
			 "formType":"consumer"
  }

	 repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"this.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"this.affectedPersonService.ngInitDefaultValueNoFormGroup"}];


   restServiceEdit(formNameP,uuid,formId,trackId,lang):Observable<any>
   {
	     var url = this.submitFormDefaults.serviceEndpointEdit + "?formNameP=" +formNameP +"&uuid=" + uuid + "&formId=" + formId + "&trackId=" + trackId + "&lang=" + lang;
	 return this.http.get(url)
										.pipe(
										map(this.extractData));
                 //   .catch(this.handleError);**/
                 //  var jsonArray={"admin":{"lkpHowAwareIncdtId":937,"lkpReportedIncidentId":52428,"submitOption":"0"},"form":{"formLang":512051,"formIdentifier":"CPS-SPC-0001.08","assignCaseNo":"2017-001249","submissionNo":"2017-03-23-000001"},"report":{"lkpReportTypeId":52386,"lkpPurposeId":545629,"caseNo":null,"lkpGovernanceId":50516},"submission":{"prgrmId":1,"lkpSubmissionTypeId":1531,"subjectDefId":1,"lkpCaseTypeId":51605,"lkpCaseSubtypeId":51628},"submitter":{"lkpContactContextId":51746,"lkpReltnshpAffctdPrsnId":545696,"personName":"Easter Bunny","address":"234 Egg Lane","city":"CottonTail ","postalCode":"K1F 2V3","country":null,"provinceRegion":null,"email":"easter@e.com","telephoneNumber":"613-999-9999","faxNumber":"613-999-9999","lkpPersonalInfoReleaseId":1501,"lstCountry":null,"lstProvince":null,"lstState":null,"otherCountry":null,"region":null},"product":{"productBrandName":"Pink Egg","modelNumber":null,"serialNumber":null,"dateCode":null,"upc":null,"certification":null,"batchNumber":null,"productDescription":"Big chocolate Egg"},"productLabel":{"lkpContactContextId":51765,"organizationName":"Easter Fluffy Tail","address":"456 Egg Blvd","city":"Basket Weave Town","postalCode":null,"country":null,"provinceRegion":null,"website":"easter@tail.com","email":"bunny@egg.com","telephoneNumber":"613-999-0000","faxNumber":null,"lstCountry":null,"lstProvince":null,"lstState":null,"otherCountry":null,"region":null},"incident":{"affectedPersons":{"affectedPerson":[{"incidentExperiencedDate":1490241600000,"lkpGenderId":52392,"ageMths":9.0,"lkpIncidentTypeId":52122,"lkpInjuryTypeId":52136,"lkpTreatmentTypeId":52301,"lkpBodyPartId":51592,"ageMths_temp":9.0,"ageRange":1,"ageYrs":null},{"incidentExperiencedDate":1490241600000,"lkpGenderId":52393,"ageMths":9.0,"lkpIncidentTypeId":52122,"lkpInjuryTypeId":52136,"lkpTreatmentTypeId":52301,"lkpBodyPartId":51593,"ageMths_temp":9.0,"ageRange":1,"ageYrs":null}]},"numberAffectedPersons":null,"incidentDescription":"A giant easter egg fell on my leg","totalAffectedPersons":null},"whereGotPrdct":{"acquiredProductDate":null,"lkpContactContextId":52397,"organizationName":"Pink Easter Egg Inc","address":"345 Easter Village","city":"Basket Weave ","postalCode":null,"country":null,"provinceRegion":null,"website":"pink@easter.com","email":"basket@weave.com","telephoneNumber":"613-777-7777","faxNumber":null,"lstCountry":null,"lstProvince":null,"lstState":null,"otherCountry":null,"region":null},"documents":{"document":[{"fileName":"easterEgg.txt","lkpInfoResourceTypeId":52089,"infoResourceTitle":" egg description","fileSize":34,"fileDataUrl":"data:text/html;base64,VGhlIGVhc3RlciBlZ2cgd2FzIGJpZyBhbmQgd2hpdGUuCg=="},{"fileName":"easterEgg.txt","lkpInfoResourceTypeId":52089,"infoResourceTitle":" egg description","fileSize":34,"fileDataUrl":"data:text/html;base64,VGhlIGVhc3RlciBlZ2cgd2FzIGJpZyBhbmQgd2hpdGUuCg=="}]}};
 
//return Observable.of(jsonArray).map(o => o);
                    
   }

  public extractData(res: Response) {
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

   getRestServiceEditData(formNameP,uuid,formId,trackId,myForm,repeatSections,lang)
   {
     this.restServiceEdit(formNameP,uuid,formId,trackId,lang).subscribe(data=>this.extractDataRetrieval(data,myForm,repeatSections),                     
							error =>  this.errorMessage = <any>error);
   }

	

   //added for retreving data from rest service 
 private extractDataRetrieval(data:any,myForm:any,repeatSections) {

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
   //end of added
}
