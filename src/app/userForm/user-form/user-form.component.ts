import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { UserFormServiceService } from '../services/user-form-service.service';
import { KeycloakRestService } from '../services/keycloak-rest.service';
import { UserFormRetrieveInformationService } from '../services/user-form-retrieve-information.service';
import { ProcessFormService } from '../services/process-form.service';
declare var $:any;
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
public myForm:FormGroup;
  constructor(
    private _fb: FormBuilder,		
    private userFormServiceService:UserFormServiceService,
    private keycloakRestService:KeycloakRestService,
    private userFormRetrieveInformationService:UserFormRetrieveInformationService,
    private processFormService:ProcessFormService) { }
  ngOnInit() {
    //$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
    this.myForm = this._fb.group
			({
				user:this.userFormServiceService.ngInitDefaultValue,			
			//	submitForm:this.submitFormService.ngInitDefaultValue,	
			});	
     
  //    var keyCloakEndPoint =this.userFormServiceService.submitFormDefaults.keyCloakServiceEndPoint;
  //    var repeatSections=this.userFormServiceService.repeatSections;      
 //     this.userFormRetrieveInformationService.importInfo(this.myForm,keyCloakEndPoint,repeatSections);
      console.log("myform" + JSON.stringify(this.myForm.value));      
  } 
  save(myForm:FormGroup)
	{
		
	}
	 reset() {
       this.myForm.reset();	 
   }
   add(myForm:FormGroup)
   {
     var keyCloakEndPointPost = this.userFormServiceService.submitFormDefaults.keyCloakServicePostEndPoint;
   //   var formData={"firstName":"Jim","lastName":"hensen","username":"jimhensen"};
   console.log("myform" +JSON.stringify(myForm.value));
     this.processFormService.addInfo(myForm,keyCloakEndPointPost);
   }
   view(myForm:FormGroup)
   {
     var keyCloakEndPoint =this.userFormServiceService.submitFormDefaults.keyCloakServiceEndPoint;
      var repeatSections=this.userFormServiceService.repeatSections; 
      this.userFormRetrieveInformationService.importInfo(this.myForm,keyCloakEndPoint,repeatSections);
   }
   delete(myForm:FormGroup)
   {
     var keyCloakEndPoint =this.userFormServiceService.submitFormDefaults.keyCloakServiceDeleteEndPoint;
      var repeatSections=this.userFormServiceService.repeatSections; 
      this.processFormService.deleteInfo(this.myForm,keyCloakEndPoint);
   }
}
