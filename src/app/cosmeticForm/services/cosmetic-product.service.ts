import { Component,ElementRef, ViewChild, Renderer, OnInit} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { OtherProductsService } from '../services/other-products.service';

@Injectable()
export class CosmeticProductService {

  constructor(	private _fb: FormBuilder, private otherProductsService:OtherProductsService) { }
/**ngInitDefaultValue=this._fb.group({ 
productBrandName:[''],
industryProductIdentifier:[''],
retailSaleBeginDate:[''],
description:[''],
  });**/
  ngInitDefaultValue= this._fb.group({
	productBrandName:[""],
	industryProductIdentifier:[""],
	retailSaleBeginDate:[""],
	otherProducts:this.otherProductsService.ngInitDefaultValue,
	description:[""]
});

}
