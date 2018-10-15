import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { WhereGotPrdctService } from '../../../common/services/where-got-prdct.service';
import { SubmitterService } from '../../../common/services/submitter.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-where-got-prdct-industry',
  templateUrl: './where-got-prdct-industry.component.html',
  styleUrls: ['./where-got-prdct-industry.component.css']
})
export class WhereGotPrdctIndustryComponent implements OnInit {
@Input('group')
public whereGotPrdctFormGrp:FormGroup;
@Input('index')
public index:string;
@Input('formName')
public formName:string;
@Input('sectionName')
public sectionName:string;
@Language() lang:string;
  constructor(private whereGotPrdctService: WhereGotPrdctService,
    private submitterService:SubmitterService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService) { }
 lstProductFromWhom;
  ngOnInit() {
    var language = $( "html" ).attr("lang");
         //this.whereGotPrdctService.getLstProductFromWhom().then(lstProductFromWhom => this.lstProductFromWhom = lstProductFromWhom); 
         let drpDownLstProductFromWhomRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstProductFromWhoms +"?lang="+language;
         this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstProductFromWhomRestEndpoint).subscribe(data =>this.formatRestData(data,"lstProductFromWhom"));
   
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
     if(drpDownName=="lstProductFromWhom")
     {
       this.lstProductFromWhom =jsonDocParentVal;
     }
     
    
  }
}
