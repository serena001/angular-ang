import { Injectable } from '@angular/core';

@Injectable()
export class VoluntaryFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "MD-TM-0005.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/MD-TM-0005.08",
       "externalServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
       "radarServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm"
  }
  	 repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"tempVarForThis.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"tempVarForThis.affectedPersonService.ngInitDefaultValueNoFormGroup"}];

}
