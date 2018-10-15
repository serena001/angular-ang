import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { WhereGotPrdctService } from '../../services/where-got-prdct.service';
import { SubmitterService } from '../../services/submitter.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-where-got-prdct',
  templateUrl: './where-got-prdct.component.html',
  styleUrls: ['./where-got-prdct.component.css']
})
export class WhereGotPrdctComponent implements OnInit {
@Language() lang:string;
@Input('group')
public whereGotPrdctFormGrp:FormGroup;
lstProductFromWhom;
@Input('sectionName')
public sectionName:string;
@Input('index')
public index:string;
@Input('formName')
public formName:string;
constructor(
  private whereGotPrdctService: WhereGotPrdctService,
  private submitterService:SubmitterService,
  public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,

  public locale: LocaleService) { }
  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
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
