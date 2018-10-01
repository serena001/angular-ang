import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-incident-voluntary',
  templateUrl: './incident-voluntary.component.html',
  styleUrls: ['./incident-voluntary.component.css']
})
export class IncidentVoluntaryComponent implements OnInit {
  @Input('group')
  public incidentVoluntaryFrmGrp:FormGroup;
  @Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
