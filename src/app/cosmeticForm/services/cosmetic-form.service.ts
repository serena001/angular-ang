import { Injectable } from '@angular/core';

@Injectable()
export class CosmeticFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "CPS-SPC-0007.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/CPS-SPC-0007.08",
       "externalServiceEndPoint": "http://localhost:8086/formSubmit",
       "radarServiceEndPoint": "http://10.224.4.20:20110/radar/services/rest/submitXMLForm",
       "formType":"cosmetic"
  }
   repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"this.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"this.affectedPersonService.ngInitDefaultValueNoFormGroup"}];

}
