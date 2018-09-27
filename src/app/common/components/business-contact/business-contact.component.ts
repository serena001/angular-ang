import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-business-contact',
  templateUrl: './business-contact.component.html',
  styleUrls: ['./business-contact.component.css']
})
export class BusinessContactComponent implements OnInit {
  @Language() lang:string;
  @Input('group')
  public businessContactFrmGrp:FormGroup;
 @Input('sectionName')
  public sectionName:string;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;

  constructor(public locale: LocaleService, ) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
