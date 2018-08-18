import { Component,ElementRef, ViewChild, Renderer, OnInit} from '@angular/core';
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
import { Params, ActivatedRoute } from '@angular/router';
import { CosmeticFormService } from '../services/cosmetic-form.service';
import { IngredientsService } from '../../common/services/ingredients.service';
import { ContactsService} from '../../common/services/contacts.service';
import { CosmeticProductService } from '../services/cosmetic-product.service';
declare var $:any;

@Component({
  selector: 'app-cosmetic-form',
  templateUrl: './cosmetic-form.component.html',
  styleUrls: ['./cosmetic-form.component.css']
})
export class CosmeticFormComponent implements OnInit{
index:string="";
formName="cosmetic";
@Language() lang:string;
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
		private adminService:AdminService,
		private reportService:ReportService,
		private ingredientsService:IngredientsService,
		private submitFormService:SubmitFormService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
		public locale: LocaleService, 
    	public translation:TranslationService,
		public translationLocaleService: TranslationLocaleService,
		private route:  ActivatedRoute,
		private cosmeticFormService:CosmeticFormService,
		private contactsService:ContactsService,
		private cosmeticProductService:CosmeticProductService){}
		
		ngOnInit()
		{ 
			var language = $( "html" ).attr("lang");
			//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
			this.locale.setCurrentLanguage(language);			
			this.myForm = this._fb.group
			({
				form:this.formService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValue,
				submitter:this.submitterService.ngInitDefaultValueIndustry,
				documents:this.documentsService.ngInitDefaultValue,
				contacts:this.contactsService.ngInitDefaultValue,
				ingredients:this.ingredientsService.ngInitDefaultValue,
				product:this.cosmeticProductService.ngInitDefaultValue,
				report:this.reportService.ngInitDefaultValueCosmetic,
				submitForm:this.submitFormService.ngInitDefaultValue,
				admin:this.adminService.ngInitDefaultValue,
					
			});	
	this.formIdentifier=this.cosmeticFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.cosmeticFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.cosmeticFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.cosmeticFormService.submitFormDefaults.externalServiceEndPoint;
this.radarServiceEndPoint=this.cosmeticFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId;	
	var repeatSections=this.cosmeticFormService.repeatSections;
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
