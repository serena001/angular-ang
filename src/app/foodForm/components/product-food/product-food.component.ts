import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-product-food',
  templateUrl: './product-food.component.html',
  styleUrls: ['./product-food.component.css']
})
export class ProductFoodComponent implements OnInit {
@Input ('group')
public productFoodFrmGrp:FormGroup;
@Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
