import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ClaimOfConfidentialityService } from '../../services/claim-of-confidentiality.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-claim-of-confidentiality',
  templateUrl: './claim-of-confidentiality.component.html',
  styleUrls: ['./claim-of-confidentiality.component.css']
})
export class ClaimOfConfidentialityComponent implements OnInit {
@Language() lang:string;
@Input('group')
public claimOfConfidentialityFrmGrp:FormGroup;
lkpPrivacyNoticeCbiIds;
  constructor(
    private claimOfConfidentialityService:ClaimOfConfidentialityService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
    public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);  
   // this.claimOfConfidentialityService.getLkpPrivacyNoticeCbiIds().then(lkpPrivacyNoticeCbiIds => this.lkpPrivacyNoticeCbiIds = lkpPrivacyNoticeCbiIds);
   let drpDownLkpPrivacyNoticeCbiIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpPrivacyNoticeCbiIds +"?lang="+language; 
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpPrivacyNoticeCbiIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpPrivacyNoticeCbiIds"));
  }
  formatRestData(data,drpDownName)
 {
    let jsonDoc=data;
    let jsonDocParent=jsonDoc[drpDownName];
    let jsonDocParentVal;
    if(jsonDocParent==undefined)
    {
      jsonDocParentVal=jsonDocParent;
    }
    else{
      jsonDocParentVal=jsonDocParent[drpDownName];
    }
    if(drpDownName=="lkpPrivacyNoticeCbiIds")
    {
      this.lkpPrivacyNoticeCbiIds =jsonDocParentVal;
    }

   
 }

}
