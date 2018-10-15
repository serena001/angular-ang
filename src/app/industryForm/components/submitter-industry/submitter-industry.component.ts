import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {RestServiceEndpointsService } from '../../../common/services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../../common/services/retrieve-drp-down-rest-service.service';

import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-submitter-industry',
  templateUrl: './submitter-industry.component.html',
  styleUrls: ['./submitter-industry.component.css']
})
export class SubmitterIndustryComponent implements OnInit {

  @Input('group')
  public submitterIndustryFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  lkpContactContextIds;
  @Language() lang:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService,
    public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
) {} 

  ngOnInit() {
    var language = $( "html" ).attr("lang");
     //this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds); 
     let drpDownLkpContactContextIdsRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLkpContactContextId +"?lang="+language;
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
       if(drpDownName=="lkpContactContextIds")
       {
         this.lkpContactContextIds =jsonDocParentVal;
       }

    }
   
}
