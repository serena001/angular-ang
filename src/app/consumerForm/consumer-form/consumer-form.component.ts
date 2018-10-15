import { Component,ElementRef, ViewChild, Renderer} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../common/services/submitter.service';
import { FormService } from '../../common/services/form.service';
import { ProductService } from '../../common/services/product.service';
import { SubmissionService } from '../../common/services/submission.service';
import { DocumentsService } from '../../common/services/documents.service';
import { WhereGotPrdctService } from '../../common/services/where-got-prdct.service';
import { AdminService } from '../../common/services/admin.service';
import { ProductLabelService } from '../../common/services/product-label.service';
import { ReportService } from '../../common/services/report.service';
import { SubmitFormService } from '../../common/services/submit-form.service';
import { IncidentService } from '../../common/services/incident.service';
import { ProceedToSubmitFormService } from '../../common/services/proceed-to-submit-form.service';
import { TranslationLocaleService } from '../../common/services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
import { Params, ActivatedRoute,Router } from '@angular/router';
import { ConsumerFormService } from '../services/consumer-form.service';

declare var $:any;
@Component({
  selector: 'consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
 
export class ConsumerFormComponent{	
index:string="";
formName="consumer";
formNameP="";
@Language() lang:string;
sectionNameSubmitter="submitter";
sectionNameWhereGotPrdct="whereGotPrdct";
sectionNamePrdctLabel="productLabel";
uuid;
formId;
trackId;
formIdentifier;
formEnvironment;
nameSpace;
externalServiceEndPoint;
radarServiceEndPoint;

	public myForm:FormGroup;
	constructor
	(
		private _fb: FormBuilder,
		private submitterService:SubmitterService, 
		private formService:FormService, 
		private productService:ProductService, 
		private submissionService: SubmissionService,
		private documentsService:DocumentsService,
		private whereGotPrdctService:WhereGotPrdctService,
		private adminService:AdminService,
		private productLabelService:ProductLabelService,
		private reportService:ReportService,
		private submitFormService:SubmitFormService,
		private incidentService:IncidentService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
    	public locale: LocaleService, 
    	public translation:TranslationService,
		public translationLocaleService: TranslationLocaleService,
		private route:  ActivatedRoute,
		private router:Router,
		private consumerFormService:ConsumerFormService){}
		
		ngOnInit()
		{ 			 
			var language = $( "html" ).attr("lang");
			//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
			this.locale.setCurrentLanguage(language);
			this.myForm = this._fb.group
			({
				form:this.formService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValue,
				submitter:this.submitterService.ngInitDefaultValue,
				documents:this.documentsService.ngInitDefaultValue,
				product:this.productService.ngInitDefaultValue,
				report:this.reportService.ngInitDefaultValue,
				submitForm:this.submitFormService.ngInitDefaultValue,
				incident:this.incidentService.ngInitDefaultValue,
				productLabel:this.productLabelService.ngInitDefaultValue,
				admin:this.adminService.ngInitDefaultValue,
				whereGotPrdct:this.whereGotPrdctService.ngInitDefaultValue										
			});	
 this.route.queryParams.forEach((params: Params) => {
        		this.formId= params['formId'];
        		this.uuid= params['uuid'];
		 		this.trackId= params['trackId'];
				this.formNameP=params['formNameP'];
 });
 var lang = $( "html" ).attr("lang");  

this.formIdentifier=this.consumerFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.consumerFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.consumerFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.consumerFormService.submitFormDefaults.externalServiceEndPoint + '?form=' + this.consumerFormService.submitFormDefaults.formType;
this.radarServiceEndPoint=this.consumerFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId+'&lang='+lang;
	  var repeatSections=this.consumerFormService.repeatSections;
 this.proceedToSubmitFormService.retrieveFormInformationRadar(this.myForm,formUrlRetrieval,repeatSections);
	}

	save(myForm:FormGroup)
	{
		this.proceedToSubmitFormService.save(myForm,this.formIdentifier,this.formEnvironment,this.nameSpace,this.externalServiceEndPoint);
		
	}

	 reset() {
       this.myForm.reset();	 
   }
  
}
