import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-business-contact',
  templateUrl: './business-contact.component.html',
  styleUrls: ['./business-contact.component.css']
})
export class BusinessContactComponent implements OnInit {
  @Input('group')
  public businessContactFrmGrp:FormGroup;
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
