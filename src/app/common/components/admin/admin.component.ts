import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@Language() lang:string;
@Input('group')
public adminFrmGrp:FormGroup;
lstHowAwares;
lstIncidentReportedTo;

  constructor(
    private adminService:AdminService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
    public locale: LocaleService) { }
 
//lstHowAwares=this.adminService.lstHowAwares;
//lstIncidentReportedTo=this.adminService.lstIncidentReportedTo;
  ngOnInit() {
    var language = $( "html" ).attr("lang");
    this.locale.setCurrentLanguage(language);
 // this.adminService.getLstHowAwares().then(lstHowAwares => this.lstHowAwares = lstHowAwares);
 // this.adminService.getLstIncidentReportedTo().then(lstIncidentReportedTo => this.lstIncidentReportedTo = lstIncidentReportedTo);

  let drpDownLstHowAwaresRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstHowAwares +"?lang="+language;
  let drpDownLstIncidentReportedToRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstIncidentReportedTos +"?lang="+language;
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstHowAwaresRestEndpoint).subscribe(data =>this.formatRestData(data,"lstHowAwares"));
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstIncidentReportedToRestEndpoint).subscribe(data =>this.formatRestData(data,"lstIncidentReportedTo"));

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
     if(drpDownName=="lstHowAwares")
     {
       this.lstHowAwares =jsonDocParentVal;
     }
     else if(drpDownName=="lstIncidentReportedTo")
     {
       this.lstIncidentReportedTo =jsonDocParentVal;
     }
    
  }
}
