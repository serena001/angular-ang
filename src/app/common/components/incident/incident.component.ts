import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
@Language() lang:string;
@Input('group')
public incidentFrmGrp:FormGroup;

  constructor(
    private _fb:FormBuilder,
    public locale: LocaleService) { }

  ngOnInit() {var language = $( "html" ).attr("lang");
  this.locale.setCurrentLanguage(language);
}

}
