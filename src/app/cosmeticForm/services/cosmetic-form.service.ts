import { Injectable } from '@angular/core';

@Injectable()
export class CosmeticFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "CPS-SPC-0007.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/CPS-SPC-0007.08",
       "externalServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
       "radarServiceEndPoint": "http://10.224.4.20:20110/radar/services/rest/submitXMLForm"
  }
   repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"this.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"this.affectedPersonService.ngInitDefaultValueNoFormGroup"}];

}
