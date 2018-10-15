import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-report-transport',
  templateUrl: './report-transport.component.html',
  styleUrls: ['./report-transport.component.css']
})
export class ReportTransportComponent implements OnInit {
@Input('group')
public reportFormGrp:FormGroup;
lstPrograms;
@Language() lang:string;
constructor(private _fb:FormBuilder, 
  private reportService:ReportService,
  public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
           //  this.reportService.getLstPrograms().then(lstPrograms => this.lstPrograms = lstPrograms); 
           let drpDownLstProgramsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstPrograms +"?lang="+language;
           this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstProgramsRestEndpoint).subscribe(data =>this.formatRestData(data,"lstPrograms"));
              
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
     if(drpDownName=="lstPrograms")
     {
       this.lstPrograms =jsonDocParentVal;
     }
     
    
  }
 
}
