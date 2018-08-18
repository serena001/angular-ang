import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AffectedPersonService } from '../services/affected-person.service';

@Injectable()
export class IncidentService {

  constructor(private _fb: FormBuilder,private affectedPersonService: AffectedPersonService ) { }
				ngInitDefaultValue=this._fb.group({
					numberAffectedPersons:[""],
					incidentDescription:[""],
					affectedPersons:this._fb.group({
						affectedPerson:this._fb.array([
						this.affectedPersonService.ngInitDefaultValue
						])
					}) 
			});
		}
