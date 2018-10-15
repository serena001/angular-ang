import { Injectable } from '@angular/core';

@Injectable()
export class FoodFormService {

  constructor() { }
submitFormDefaults=
  {
       "formIdentifier": "FD-DA-0001.08", 
       "formEnvironment": "DEV",
       "nameSpace": "http://www.hc-sc.gc.ca/schema/FD-DA-0001.08",
       "externalServiceEndPoint": "http://localhost:8086/formSubmit",
       "radarServiceEndPoint": "http://10.224.4.20:20130/external/services/rest/submitXMLForm",
       "formType":"food"
  }
   repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"tempVarForThis.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"tempVarForThis.affectedPersonService.ngInitDefaultValueNoFormGroup"}];

}
