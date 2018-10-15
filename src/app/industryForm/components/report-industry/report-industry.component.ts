import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-report-industry',
  templateUrl: './report-industry.component.html',
  styleUrls: ['./report-industry.component.css']
})
export class ReportIndustryComponent implements OnInit {
@Input('group')
public reportFormGrp:FormGroup;
@Language() lang:string;
lkpPurposeIds;
constructor(private _fb:FormBuilder, private reportService:ReportService,
  public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService) { }

  ngOnInit() { 
    var language = $( "html" ).attr("lang");
  //  this.reportService.getLkpPurposeIds().then(lkpPurposeIds => this.lkpPurposeIds = lkpPurposeIds); 
    let drpDownLkpPurposeIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpPurposeIds +"?lang="+language;
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpPurposeIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpPurposeIds"));
       
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
    if(drpDownName=="lkpPurposeIds")
    {
      this.lkpPurposeIds =jsonDocParentVal;
    }
 
 }

}
