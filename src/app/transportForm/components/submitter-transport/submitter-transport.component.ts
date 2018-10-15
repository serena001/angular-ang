import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-submitter-transport',
  templateUrl: './submitter-transport.component.html',
  styleUrls: ['./submitter-transport.component.css']
})
export class SubmitterTransportComponent implements OnInit {

 @Input('group')
  public submitterTransportFrmGrp:FormGroup;
  @Input('sectionName')
  public sectionName:string;
    @Input('formName')
  public formName:string;
@Input('index')
public index:string; 
    lkpReltnshpAffctdPrsnIds;
lkpContactContextIds;
@Language() lang:string;
  constructor(private _fb:FormBuilder, 
    private submitterService: SubmitterService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService
) {} 

  ngOnInit() {
    var language = $( "html" ).attr("lang");
          //this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds); 
     //this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds); 
     let drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpReltnshpAffctdPrsnIds +"?lang="+language;
     let drpDownLkpContactContextIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpContactContextId +"?lang="+language;
     this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpReltnshpAffctdPrsnIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpReltnshpAffctdPrsnIds"));
     this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLkpContactContextIdsRestEndpoint).subscribe(data =>this.formatRestData(data,"lkpContactContextIds"));

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
