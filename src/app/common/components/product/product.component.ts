import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Language() lang:string;
@Input('group')
public productFrmGrp:FormGroup;
  constructor(public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
