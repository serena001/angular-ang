import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-common',
  templateUrl: './product-common.component.html',
  styleUrls: ['./product-common.component.css']
})
export class ProductCommonComponent implements OnInit {
@Input('group')
public productCommonFrmGrp:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
