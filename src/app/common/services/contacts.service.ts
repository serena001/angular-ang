import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Injectable()
export class ContactsService {

  constructor(private _fb:FormBuilder,private contactService: ContactService) { }
 ngInitDefaultValue=this._fb.group({
					contact:this._fb.array([
						this.contactService.ngInitDefaultValue						
						])
         });
}
