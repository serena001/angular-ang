import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-product-label',
  templateUrl: './product-label.component.html',
  styleUrls: ['./product-label.component.css']
})
export class ProductLabelComponent implements OnInit {
  @Language() lang:string;
  @Input('group')
  public productLabelFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  constructor(public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
