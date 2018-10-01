import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ContactService } from '../../../common/services/contact.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
@Input('group')
public contactsFrmGrp:FormGroup;
@Input('formName')
public formName:string;
@Input('sectionName')
public sectionName:string;
@Language() lang:string;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }
  addContact()
	{
		const control = <FormArray>this.contactsFrmGrp.get('contact');
	  control.push(this._fb.group({ 
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
  titleWithinOrganization:[""]}));
	}
	removeContact(i:number)
	{
    const control = <FormArray>this.contactsFrmGrp.get("contact");
	    control.removeAt(i);
	}
 getContacts(contactsFrmGrp)
 {
	 return contactsFrmGrp.controls.contact.controls;
 }

}
