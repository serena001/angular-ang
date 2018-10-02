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

    let drpDownlstReportTypesRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstReportTypes;
    drpDownlstReportTypesRestEndpoint=drpDownlstReportTypesRestEndpoint+"?lang="+lang;
    let drpDownLstProductTypesRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstProductTypes;
    drpDownLstProductTypesRestEndpoint=drpDownLstProductTypesRestEndpoint+"?lang="+lang;
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownlstReportTypesRestEndpoint).subscribe(data =>this.formatRestData(data,"lstReportTypes"));
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstProductTypesRestEndpoint).subscribe(data =>this.formatRestData(data,"lstProductTypes"));
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
    if(drpDownName=="lstReportTypes")
    {
      this.lstReportTypes =jsonDocParentVal;
    }
    else if(drpDownName=="lstProductTypes")
    {
      this.lstProductTypes =jsonDocParentVal;
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
