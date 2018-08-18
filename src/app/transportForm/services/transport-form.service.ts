import { Injectable } from '@angular/core';

@Injectable()
export class TransportFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "HCT-TSC-0001.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/HCT-TSC-0001.08",
       "externalServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
       "radarServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm"
  }
   repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"tempVarForThis.documentService.ngInitDefaultValueNoFormGroup"}];
	
}
