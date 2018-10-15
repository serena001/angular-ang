import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../../../common/services/admin.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-admin-industry',
  templateUrl: './admin-industry.component.html',
  styleUrls: ['./admin-industry.component.css']
})
export class AdminIndustryComponent implements OnInit {
@Input('group')
public adminFrmGrp:FormGroup;
lstHowAwares;
@Language() lang:string;
  constructor(private adminService:AdminService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
  //this.adminService.getLstHowAwaresIndustry().then(lstHowAwares => this.lstHowAwares = lstHowAwares);
  let drpDownLstHowAwaresRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstHowAwares +"?lang="+language;
  this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstHowAwaresRestEndpoint).subscribe(data =>this.formatRestData(data,"lstHowAwares"));
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
   
    
  }
 
 
}
