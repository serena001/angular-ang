import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
declare var $:any;
@Component({
  selector: 'app-submitter',
  templateUrl: './submitter.component.html',
  styleUrls: ['./submitter.component.css']
})
export class SubmitterComponent implements OnInit {
  @Language() lang:string;
  @Input('group')
  public submitterFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  lkpReltnshpAffctdPrsnIds;
  lkpContactContextIds;
  @Input('sectionName')
  public sectionName:string;
  constructor(
    private _fb:FormBuilder, 
    private submitterService: SubmitterService,
    public locale: LocaleService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService) {} 
  ngOnInit() 
  {     
    var lang = $( "html" ).attr("lang");
	  this.locale.setCurrentLanguage(lang); 
    this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);
    this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds);
 
    let drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpReltnshpAffctdPrsnIds;
    drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint=drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint+"?lang="+lang;
    let drpDownLkpContactContextIdRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpContactContextId;
    drpDownLkpContactContextIdRestEndpoint=drpDownLkpContactContextIdRestEndpoint+"?lang="+lang;
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpReltnshpAffctdPrsnIds"));
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpContactContextIdRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpContactContextIds"));

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
    
  if(drpDownName=="lkpReltnshpAffctdPrsnIds")
    {
      this.lkpReltnshpAffctdPrsnIds =jsonDocParentVal;
    }
    else if(drpDownName=="lkpContactContextIds")
    {
      this.lkpContactContextIds =jsonDocParentVal;
    }
   
 }
}
