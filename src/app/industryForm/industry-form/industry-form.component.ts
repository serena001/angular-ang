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
import { MeasureService } from '../../common/services/measure.service';
import { ProceedToSubmitFormService } from '../../common/services/proceed-to-submit-form.service';
import { IndustryFormService } from '../services/industry-form.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'industry-form',
  templateUrl: './industry-form.component.html',
  styleUrls: ['./industry-form.component.css']
})

export class IndustryFormComponent {	
index:string="";
formName:string="industry";
sectionNameSubmitter:string="submitter";
sectionNameWhereGotPrdct:string="whereGotPrdct";
sectionNameProductLabel:string="productLabel";
uuid;
formId;
trackId;
formIdentifier;
formEnvironment;
nameSpace;
externalServiceEndPoint;
radarServiceEndPoint;
	public myForm:FormGroup;
	@Language() lang:string;
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
    	private measureService:MeasureService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
		private industryFormService:IndustryFormService
    
		){};
		
		ngOnInit()
		{ 	//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
			this.myForm = this._fb.group
			({
				form:this.formService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValue,
				submitter:this.submitterService.ngInitDefaultValueIndustry,
				documents:this.documentsService.ngInitDefaultValue,
				product:this.productService.ngInitDefaultValue,
				report:this.reportService.ngInitDefaultValueIndustry,
				submitForm:this.submitFormService.ngInitDefaultValue,
				incident:this.incidentService.ngInitDefaultValue,
				productLabel:this.productLabelService.ngInitDefaultValue,
				admin:this.adminService.ngInitDefaultValue,
				whereGotPrdct:this.whereGotPrdctService.ngInitDefaultValueIndustry,
        		measure:this.measureService.ngInitDefaultValue					
			});	  
this.formIdentifier=this.industryFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.industryFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.industryFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.industryFormService.submitFormDefaults.externalServiceEndPoint  + '?form=' + this.industryFormService.submitFormDefaults.formType;
this.radarServiceEndPoint=this.industryFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId;	
	var repeatSections=this.industryFormService.repeatSections;
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
