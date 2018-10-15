import { Injectable } from '@angular/core';

@Injectable()
export class IndustryFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "CPS-SPC-0003.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/CPS-SPC-0003.08",
       "externalServiceEndPoint": "http://localhost:8086/formSubmit",
       "radarServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
       "formType":"industry"
  }
  repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"tempVarForThis.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"tempVarForThis.affectedPersonService.ngInitDefaultValueNoFormGroup"}];
	
}
