import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-cosmetic',
  templateUrl: './product-cosmetic.component.html',
  styleUrls: ['./product-cosmetic.component.css']
})
export class ProductCosmeticComponent implements OnInit {

@Input('group')
public productFrmGrp:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
