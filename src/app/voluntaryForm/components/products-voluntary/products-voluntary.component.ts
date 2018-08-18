import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
//import { RemoveSectionService } from 'voluntaryForm/products-voluntary/common/services/remove-section.service';
declare var $:any;
@Component({
  selector: 'app-products-voluntary',
  templateUrl: './products-voluntary.component.html',
  styleUrls: ['./products-voluntary.component.css']
})
export class ProductsVoluntaryComponent implements OnInit {
@Input('group')
  public devicesVoluntaryFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string; 
  @Input('sectionName')
  public sectionName:string;
  constructor(private _fb:FormBuilder/*,private removeSectionService:RemoveSectionService*/) { }

  ngOnInit() {
  }
addDevice()
	{
		const control = <FormArray>this.devicesVoluntaryFrmGrp.get('device');
	  control.push(this._fb.group({
						device:this._fb.array([
						{
          assignCaseNo:[""],
          productBrandName:[""],
          productLicenseNumber:[""],
          modelNumber:[""],
          serialNumber:[""],
          batchNumber:[""],
          upc:[""],
          dateCode:[""],
          softwareNameAndVersion:[""],
          manufacturer:this._fb.group({ 
	organizationName:[''],
	personName:[''],
	address:[''],
	city: [''], 
	postalCode:[''],
	email:[''],
	telephoneNumber:[''],
	faxNumber:[''],
	website:[''],
	lkpReltnshpAffctdPrsnId:[""],
	lstCountry:[""],
	otherCountry:[ ''],
	lstProvince:[""],
	lstState:[""],
	region:[''],
	provinceRegion:[''],
	country:[''],
	lkpPersonalInfoReleaseId:"",
	lkpPrivacyNoticeCbiId:"",
	lkpContactContextId:"",
  titleWithinOrganization:[""]}),
          retailer:this._fb.group({ 
	organizationName:[''],
	personName:[''],
	address:[''],
	city: [''], 
	postalCode:[''],
	email:[''],
	telephoneNumber:[''],
	faxNumber:[''],
	website:[''],
	lkpReltnshpAffctdPrsnId:[""],
	lstCountry:[""],
	otherCountry:[ ''],
	lstProvince:[""],
	lstState:[""],
	region:[''],
	provinceRegion:[''],
	country:[''],
	lkpPersonalInfoReleaseId:"",
	lkpPrivacyNoticeCbiId:"",
	lkpContactContextId:"",
  titleWithinOrganization:[""]}),
			}])
					}));
	}
removeDevice(i:number)
	{
		var sectionNum=i+1;
		var message="Are you sure you want to remove the affected Person " + sectionNum;	
		//this.removeSectionService.removeSection(message); 
		const control = <FormArray>this.devicesVoluntaryFrmGrp.get('device');
	//	$("#yesBtn").unbind('click');  
    //$("#yesBtn").click(function(e)
    //{				
    	control.removeAt(i);
  //  }); 
	}
 getDevices(devicesVoluntaryFrmGrp)
 {
   return devicesVoluntaryFrmGrp.controls.device.controls;
 }
}
