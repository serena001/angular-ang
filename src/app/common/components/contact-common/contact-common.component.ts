import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ContactCommonService } from '../../services/contact-common.service';
import {RestServiceEndpointsService } from '../../services/rest-service-endpoints.service';
import {RetrieveDrpDownRestServiceService } from '../../services/retrieve-drp-down-rest-service.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-contact-common',
  templateUrl: './contact-common.component.html',
  styleUrls: ['./contact-common.component.css']
})
export class ContactCommonComponent implements OnInit {
@Language() lang:string;
@Input('group')
public contactCommonFrmGrp:FormGroup;
 @Input('sectionName')
  public sectionName:string;
	 @Input('index')
  public index:string;
	@Input('formName')
	public formName:string;

	lstCountries;
	lstProvinces;
	lstStates;
  constructor(
		private contactCommonService: ContactCommonService,
		public restServiceEndpointsService:RestServiceEndpointsService,
    private retrieveDrpDownRestServiceService:RetrieveDrpDownRestServiceService,
		public locale: LocaleService, 
		) { }	  

  showProvince:boolean =true;
  showState:boolean =true;
  showOther:boolean=true;
  provinceRegion:string="";
  country:string="";
  ngOnInit() {
		var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
//	this.contactCommonService.getLstCountries().then(lstCountries => this.lstCountries = lstCountries);
 // this.contactCommonService.getLstProvinces().then(lstProvinces => this.lstProvinces = lstProvinces);
  //this.contactCommonService.getLstStates().then(lstStates => this.lstStates = lstStates);
  let drpDownLstCountriesRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstCountries +"?lang="+language;
  let drpDownLstProvincesRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstProvinces +"?lang="+language;
  let drpDownLstStatesRestEndpoint=this.restServiceEndpointsService.endpointDefaults.drpDownLstStates +"?lang="+language;

    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstCountriesRestEndpoint).subscribe(data =>this.formatRestData(data,"lstCountries"));
    this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstProvincesRestEndpoint).subscribe(data =>this.formatRestData(data,"lstProvinces"));
	this.retrieveDrpDownRestServiceService.getDrpDownInformation(drpDownLstStatesRestEndpoint).subscribe(data =>this.formatRestData(data,"lstStates"));


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
    if(drpDownName=="lstCountries")
    {
      this.lstCountries =jsonDocParentVal;
    }
    else if(drpDownName=="lstProvinces")
    {
      this.lstProvinces =jsonDocParentVal;
	}
	else if(drpDownName=="lstStates")
    {
      this.lstStates =jsonDocParentVal;
    }
   
 }

onChange(newVal) 
  {
    
  }   
  setCountry($event,value)
	{	
  
			if(value=="Canada")
			{
				this.showProvince=false;
				this.showState=true;
				this.showOther=true;
        
			}
			else if(value=="United States" )
			{
				this.showProvince=true;
				this.showState=false;
				this.showOther=true;
			}
			else if(value=="Other")
			{
				this.showProvince=true;
				this.showState=true;
				this.showOther=false;
			}
			else
			{
				this.showProvince=true;
				this.showState=true;
				this.showOther=true;
			}			
	}
}
