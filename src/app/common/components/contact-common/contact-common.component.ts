import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ContactCommonService } from '../../services/contact-common.service';

@Component({
  selector: 'app-contact-common',
  templateUrl: './contact-common.component.html',
  styleUrls: ['./contact-common.component.css']
})
export class ContactCommonComponent implements OnInit {
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
  constructor(private contactCommonService: ContactCommonService) { }

  showProvince:boolean =true;
  showState:boolean =true;
  showOther:boolean=true;
  provinceRegion:string="";
  country:string="";
  ngOnInit() {
			this.contactCommonService.getLstCountries().then(lstCountries => this.lstCountries = lstCountries);
  this.contactCommonService.getLstProvinces().then(lstProvinces => this.lstProvinces = lstProvinces);
  this.contactCommonService.getLstStates().then(lstStates => this.lstStates = lstStates);
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
