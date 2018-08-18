import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
declare var $:any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
@Input('group')
public reportFormGrp:FormGroup;
lstProductTypes;
lstReportPurposes;
lstReportTypes;
showCase=true;
@Language() lang:string;

  constructor(
    private _fb:FormBuilder, 
    private reportService:ReportService,
    public locale: LocaleService, 
    public translation:TranslationService,
		public translationLocaleService: TranslationLocaleService,
    public restServiceEndpointsService:RestServiceEndpointsService,
     private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService){}
      
 
  ngOnInit() {
    var lang = $( "html" ).attr("lang");
    this.locale.setCurrentLanguage(lang);
    var drpDownRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownServiceEndPoint;
    drpDownRestEndpoint=drpDownRestEndpoint+"?lang="+lang;
    this.reportService.getLstProductTypes().then(lstProductTypes => this.lstProductTypes = lstProductTypes);
    this.reportService.getLstReportPurposes().then(lstReportPurposes => this.lstReportPurposes = lstReportPurposes);      
 this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownRestEndpoint).subscribe(data =>this.formatRestData(data,"lstReportTypes"));
if(this.lstReportTypes=="" || this.lstReportTypes==undefined)
 { this.reportService.getLstReportTypes(lang).then(data => this.formatRestData(data,"lstReportTypes")); }
  }
 formatRestData(data,drpDownName)
 {
  var jsonDoc=data;
  console.log("ddd" + JSON.stringify(jsonDoc));
  var jsonDocParent=jsonDoc[drpDownName];
  if(jsonDocParent==undefined){
    this.lstReportTypes =jsonDocParent;
  }
  else
  {
    this.lstReportTypes =jsonDocParent[drpDownName];
  }
  
 }
setCaseNo($event,value)
	{	

			if(value=="52386")
			{
				this.showCase=true;
			}
      else if(value=="52387")
      {
        this.showCase=false;
      }
   
			
	}
}
