import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.css']
})
export class OtherProductComponent implements OnInit {
@Input('group')
public otherProductsFrmGrp:FormGroup;
@Input('index')
public index:string;
@Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
