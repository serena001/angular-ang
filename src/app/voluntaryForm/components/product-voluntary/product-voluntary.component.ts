import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-product-voluntary',
  templateUrl: './product-voluntary.component.html',
  styleUrls: ['./product-voluntary.component.css']
})
export class ProductVoluntaryComponent implements OnInit {
  @Input('group')
  public manufacturerVoluntaryFrmGrp:FormGroup;
  @Input('group')
  public retailerFormGrp:FormGroup;
  @Input('group')
  public manufacturerFormGrp:FormGroup;
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
