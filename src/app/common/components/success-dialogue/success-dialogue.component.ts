import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-success-dialogue',
  templateUrl: './success-dialogue.component.html',
  styleUrls: ['./success-dialogue.component.css']
})
export class SuccessDialogueComponent implements OnInit {
@Input('successMessage')
public successMessage:string;
  constructor(public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
