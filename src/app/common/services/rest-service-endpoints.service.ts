import { Injectable } from '@angular/core';

@Injectable()
export class RestServiceEndpointsService {

  constructor() { }
endpointDefaults=
  {      
     //  "drpDownServiceEndPoint": "https://cosmetic-cosmetique-service.hc-sc.gc.ca/CosmeticValidation/api/v1/substance/findSubstance?name=water",      
       "drpDownServiceEndPoint": "http://localhost:8083/cosmeticValidation",      
 
}
}
