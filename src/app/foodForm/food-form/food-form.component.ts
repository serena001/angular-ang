import { Component,OnInit,ElementRef, ViewChild, Renderer} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../common/services/submitter.service';
import { FormService } from '../../common/services/form.service';
import { ProductService } from '../../common/services/product.service';
import { SubmissionService } from '../../common/services/submission.service';
import { DocumentsService } from '../../common/services/documents.service';
import { ReportService } from '../../common/services/report.service';
import { SubmitFormService } from '../../common/services/submit-form.service';
import { ContactsService } from '../../common/services/contacts.service';
import { ProceedToSubmitFormService } from '../../common/services/proceed-to-submit-form.service';
import { FoodFormService } from '../services/food-form.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
formName="food";
sectionNamePetitioner="petitioner";
sectionNameSubmitter="submitter";
sectionNameContacts="contacts";
index="";
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
		private reportService:ReportService,
		private submitFormService:SubmitFormService,  
		private contactsService:ContactsService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
		private foodFormService:FoodFormService
		){};
		 
		ngOnInit()
		{ 		//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );	
			this.myForm = this._fb.group
			({
				form:this.formService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValueFood,
				submitter:this.submitterService.ngInitDefaultValueIndustry,
				petitioner:this.submitterService.ngInitDefaultValueIndustry,
        		contacts:this.contactsService.ngInitDefaultValue,
				documents:this.documentsService.ngInitDefaultValue,
				product:this.productService.ngInitDefaultValueFood,
				report:this.reportService.ngInitDefaultValueFood,
				submitForm:this.submitFormService.ngInitDefaultValue
			});	

this.formIdentifier=this.foodFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.foodFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.foodFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.foodFormService.submitFormDefaults.externalServiceEndPoint  + '?form=' + this.foodFormService.submitFormDefaults.formType;
this.radarServiceEndPoint=this.foodFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId;	
	var repeatSections=this.foodFormService.repeatSections;
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
