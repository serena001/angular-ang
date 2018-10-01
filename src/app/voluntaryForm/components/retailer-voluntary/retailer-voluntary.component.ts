import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';

@Component({
  selector: 'app-retailer-voluntary',
  templateUrl: './retailer-voluntary.component.html',
  styleUrls: ['./retailer-voluntary.component.css']
})
export class RetailerVoluntaryComponent implements OnInit {
  @Input('group')
  public retailerVoluntaryFrmGrp:FormGroup;
   @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  @Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
