import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { lstReportTypes } from './reportDrpDown';
import { lkpPurposeIds } from './reportDrpDown';
import { lstPrograms } from './reportDrpDown';
import { lstProductTypes } from './reportDrpDown';
import { lstReportPurposes } from './reportDrpDown';
import { lstReportTypesF } from './reportDrpDown';
import { lstNotificationTypes } from './reportDrpDown';

@Injectable()
export class ReportService {
lstReportTypesVar:any;
lstDataRestCall:any;
lstDataFromRestCall:any;
drpDownLstName="lstReportTypes";
errorMessage="HAA";

  constructor(
    private _fb: FormBuilder,
  
  ) { } 
   getLstReportTypes(lang):Promise<any> {
      if(lang=="fr")
      {console.log("here");
      this.lstReportTypesVar=lstReportTypesF;
      }
      else{
          this.lstReportTypesVar=lstReportTypes;
      }      
    return Promise.resolve(this.lstReportTypesVar);
    }

    getLkpPurposeIds():Promise<any> {
    return Promise.resolve(lkpPurposeIds);
    }
    getLstPrograms():Promise<any> {
    return Promise.resolve(lstPrograms);
    }
    getLstProductTypes():Promise<any> {
    return Promise.resolve(lstProductTypes);
    }
    getLstReportPurposes():Promise<any> {
    return Promise.resolve(lstReportPurposes);
    }
    getLstNotificationTypes():Promise<any> {
    return Promise.resolve(lstNotificationTypes);
    }

ngInitDefaultValue=this._fb.group({lkpReportTypeId:[''],lkpGovernanceId:[''],lkpPurposeId:["545629"],caseNo:['']});
ngInitDefaultValueIndustry=this._fb.group({lkpReportTypeId:[''],lkpGovernanceId:[''],lkpPurposeId:[""],caseNo:[''],submitterFileNumber:['']});
ngInitDefaultValueTransport=this._fb.group({prgrmId:[''],caseNo:['']});
ngInitDefaultValueFood=this._fb.group({lkpReportTypeId:[''],lkpPurposeId:[""]});
ngInitDefaultValueCosmetic=this._fb.group({regulatoryIdentifier:[''],lkpPurposeId:[""]});
}