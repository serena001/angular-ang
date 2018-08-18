import { Component,ElementRef, ViewChild, Renderer, OnInit} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { OtherProductService } from '../services/other-product.service';

@Injectable()
export class OtherProductsService {

  constructor(private _fb: FormBuilder, private otherProductService:OtherProductService) { }

ngInitDefaultValue=this._fb.group({
					otherProduct:this._fb.array([
						this.otherProductService.ngInitDefaultValue		
						])
         });
}
