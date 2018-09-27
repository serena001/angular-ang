import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-product-common',
  templateUrl: './product-common.component.html',
  styleUrls: ['./product-common.component.css']
})
export class ProductCommonComponent implements OnInit {
@Language() lang:string;
@Input('group')
public productCommonFrmGrp:FormGroup;
  constructor(public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
