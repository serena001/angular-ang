import { Component,OnInit,ElementRef, ViewChild, Renderer} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../common/services/submitter.service';
import { FormService } from '../../common/services/form.service';
import { SubmissionService } from '../../common/services/submission.service';
import { DocumentsService } from '../../common/services/documents.service';
import { AdminService } from '../../common/services/admin.service';
import { ReportService } from '../../common/services/report.service';
import { SubmitFormService } from '../../common/services/submit-form.service';
import { IncidentService } from '../../common/services/incident.service';
import { ProceedToSubmitFormService } from '../../common/services/proceed-to-submit-form.service';
import { VoluntaryFormService } from '../services/voluntary-form.service';
import { DeviceService } from '../services/device.service';
import { IncidentVoluntaryService } from '../services/incident-voluntary.service';
import { TranslationLocaleService } from '../../common/services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
import { Params, ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-voluntary-form',
  templateUrl: './voluntary-form.component.html',
  styleUrls: ['./voluntary-form.component.css']
})
export class VoluntaryFormComponent implements OnInit {
index:string="";
formName="voluntary";
@Language() lang:string;
sectionNameSubmitter="submitter";
sectionNameWhereGotPrdct="manufacturer";
sectionNamePrdctLabel="retailer";
sectionNameDevices="device";

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
    private reportService:ReportService,
		private submitterService:SubmitterService, 
		private incidentService:IncidentService,    
		private formService:FormService, 
    private deviceService: DeviceService,    
		private submissionService: SubmissionService,
		private documentsService:DocumentsService,
    private submitFormService:SubmitFormService,
		private adminService:AdminService,
		private proceedToSubmitFormService:ProceedToSubmitFormService,
    public locale: LocaleService, 
    public translation:TranslationService,
		public translationLocaleService: TranslationLocaleService,
		private route:  ActivatedRoute,
		private voluntaryFormService:VoluntaryFormService,
		private incidentVoluntaryService:IncidentVoluntaryService){}
		
		ngOnInit()
		{ 			
			var language = $( "html" ).attr("lang");
			//$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
			this.locale.setCurrentLanguage(language);
			this.myForm = this._fb.group
			({
        report:this.reportService.ngInitDefaultValue,
        submitter:this.submitterService.ngInitDefaultValue,
        incident:this.incidentVoluntaryService.ngInitDefaultValue,        
				form:this.formService.ngInitDefaultValue,
        devices:this.deviceService.ngInitDefaultValue,
				submission:this.submissionService.ngInitDefaultValue,
				documents:this.documentsService.ngInitDefaultValue,
				submitForm:this.submitFormService.ngInitDefaultValue,
				admin:this.adminService.ngInitDefaultValue,
								
			});	
 this.route.queryParams.forEach((params: Params) => {
        		this.formId= params['formId'];
        		this.uuid= params['uuid'];
		 		this.trackId= params['trackId'];
 });

this.formIdentifier=this.voluntaryFormService.submitFormDefaults.formIdentifier;
this.formEnvironment=this.voluntaryFormService.submitFormDefaults.formEnvironment;
this.nameSpace=this.voluntaryFormService.submitFormDefaults.nameSpace;
this.externalServiceEndPoint=this.voluntaryFormService.submitFormDefaults.externalServiceEndPoint+ '?form=' + this.voluntaryFormService.submitFormDefaults.formType;;
this.radarServiceEndPoint=this.voluntaryFormService.submitFormDefaults.radarServiceEndPoint;
			//this.formService.retrieveFormInformation(this.myForm);
var formUrlRetrieval=this.radarServiceEndPoint + '?uuid=' + this.uuid + '&formId=' + this.formId + '&trackId=' +this.trackId;
console.log("parameters" + this.uuid + this.formId + this.trackId);	
	var repeatSections=this.voluntaryFormService.repeatSections;
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
