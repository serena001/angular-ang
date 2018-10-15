import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PrivacyNoticeService } from '../../services/privacy-notice.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.css']
})
export class PrivacyNoticeComponent implements OnInit {
@Language() lang:string;
@Input('group')
public privacyNoticeFrmGrp:FormGroup;
lstReleaseInfo;
  constructor(
    private privacyNoticeService:PrivacyNoticeService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
    public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
       //this.privacyNoticeService.getLstReleaseInfo().then(lstReleaseInfo => this.lstReleaseInfo = lstReleaseInfo);
       let drpDownLstReleaseInfoRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstReleaseInfos +"?lang="+language;
         this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstReleaseInfoRestEndpoint).subscribe(data =>this.formatRestData(data,"lstReleaseInfo"));
     
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
     if(drpDownName=="lstReleaseInfo")
     {
       this.lstReleaseInfo =jsonDocParentVal;
     }
   
  }
 
}
