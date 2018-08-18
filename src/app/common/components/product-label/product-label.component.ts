import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-label',
  templateUrl: './product-label.component.html',
  styleUrls: ['./product-label.component.css']
})
export class ProductLabelComponent implements OnInit {
  @Input('group')
  public productLabelFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  constructor() { }

  ngOnInit() {
  }

}
