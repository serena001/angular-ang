import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-submitter-cosmetic',
  templateUrl: './submitter-cosmetic.component.html',
  styleUrls: ['./submitter-cosmetic.component.css']
})
export class SubmitterCosmeticComponent implements OnInit {
 @Input('group')
  public submitterCosmeticFrmGrp:FormGroup;
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
