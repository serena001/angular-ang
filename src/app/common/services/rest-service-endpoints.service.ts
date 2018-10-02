import { Injectable } from '@angular/core';

@Injectable()
export class RestServiceEndpointsService {

  constructor() { }
endpointDefaults=
  {      
     //  "drpDownServiceEndPoint": "https://cosmetic-cosmetique-service.hc-sc.gc.ca/CosmeticValidation/api/v1/substance/findSubstance?name=water",      
       "drpDownServiceEndPoint": "http://localhost:8083/cosmeticValidation", 
       "drpDownlkpBodyPartIdDrpDwn": "http://localhost:8083/lkpBodyPartIdDrpDwn", 
       "drpDownLkpContactContextId": "http://localhost:8083/lkpContactContextId", 
       "drpDownLkpGenderIds": "http://localhost:8083/lkpGenderIds", 
       "drpDownLkpIncidentTypeIds": "http://localhost:8083/lkpIncidentTypeIds", 
       "drpDownLkpInfoResourceTypeIds": "http://localhost:8083/lkpInfoResourceTypeIds", 
       "drpDownLkpInjuryTypeIds": "http://localhost:8083/lkpInjuryTypeIds", 
       "drpDownLkpPrivacyNoticeCbiIds": "http://localhost:8083/lkpPrivacyNoticeCbiIdsIds", 
       "drpDownLkpPurposeIds": "http://localhost:8083/lkpPurposeIds", 
      "drpDownLkpReltnshpAffctdPrsnIds": "http://localhost:8083/lkpReltnshpAffctdPrsnIds", 
      "drpDownLkpTreatmentTypeIds": "http://localhost:8083/lkpTreatmentTypeIds", 
      "drpDownLstAgeRanges": "http://localhost:8083/lstAgeRanges", 
      "drpDownLstCorrectiveMeasures": "http://localhost:8083/lstCorrectiveMeasures", 
      "drpDownLstCountries": "http://localhost:8083/lstCountries", 
      "drpDownLstHowAwares": "http://localhost:8083/lstHowAwares", 
      "drpDownLstIncidentReportedTos": "http://localhost:8083/lstIncidentReportedTos", 
      "drpDownLstNotificationTypes": "http://localhost:8083/lstNotificationTypes", 
      "drpDownLstProductFromWhoms": "http://localhost:8083/lstProductFromWhoms", 
      "drpDownLstPrograms": "http://localhost:8083/lstPrograms", 
      "drpDownLstReleaseInfos": "http://localhost:8083/lstReleaseInfos", 
      "drpDownLstSubmitOptions": "http://localhost:8083/lstSubmitOptions", 
      "drpDownLstProvinces": "http://localhost:8083/lstProvinces", 
      "drpDownLstStates": "http://localhost:8083/lstStates", 
      "drpDownLstProductTypes": "http://localhost:8083/lstProductTypes", 
      "drpDownLstReportTypes": "http://localhost:8083/lstReportTypes", 
      
}
}
