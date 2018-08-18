import { Component,OnInit,ElementRef, ViewChild, Renderer} from '@angular/core';
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
import { TransportFormService } from '../services/transport-form.service';
declare var $:any;
@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.css']
})
export class TransportFormComponent implements OnInit {
sectionNameSubmitter="submitter";
formName="transport";
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
	constructor
	(
		private _fb: FormBuilder,
		private submitterService:SubmitterService, 
		private formService:FormService, 
		private submissionService: SubmissionService,
		private documentsService:DocumentsService,
		private adminService:AdminService,
		private reportService:ReportService,
		private submitFormService:SubmitFormService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
		private transportFormService:TransportFormService
		){};
		
		ngOnInit()
		{ 	//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
			this.myForm = this._fb.group
			({
				form:this.formService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValue,
				submitter:this.submitterService.ngInitDefaultValueIndustry,
				documents:this.documentsService.ngInitDefaultValue,
				report:this.reportService.ngInitDefaultValueTransport,
				submitForm:this.submitFormService.ngInitDefaultValue,
				admin:this.adminService.ngInitDefaultValue,
			
			});	 
this.formIdentifier=this.transportFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.transportFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.transportFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.transportFormService.submitFormDefaults.externalServiceEndPoint;
this.radarServiceEndPoint=this.transportFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId;
	var repeatSections=this.transportFormService.repeatSections;
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



