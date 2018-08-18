import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-contact',
  templateUrl: './person-contact.component.html',
  styleUrls: ['./person-contact.component.css']
})
export class PersonContactComponent implements OnInit {
  @Input('group')
  public personContactFrmGrp:FormGroup;
 @Input('sectionName')
  public sectionName:string;
   @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  constructor() { }
  ngOnInit() {
  }

}
