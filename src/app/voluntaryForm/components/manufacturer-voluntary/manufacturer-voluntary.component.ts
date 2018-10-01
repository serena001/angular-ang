import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-manufacturer-voluntary',
  templateUrl: './manufacturer-voluntary.component.html',
  styleUrls: ['./manufacturer-voluntary.component.css']
})
export class ManufacturerVoluntaryComponent implements OnInit {
  @Input('group')
  public manufacturerVoluntaryFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  lkpContactContextIds;
  @Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
