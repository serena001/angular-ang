import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-product-cosmetic',
  templateUrl: './product-cosmetic.component.html',
  styleUrls: ['./product-cosmetic.component.css']
})
export class ProductCosmeticComponent implements OnInit {

@Input('group')
public productFrmGrp:FormGroup;
@Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
