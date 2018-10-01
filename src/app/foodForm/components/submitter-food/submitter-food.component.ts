import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-submitter-food',
  templateUrl: './submitter-food.component.html',
  styleUrls: ['./submitter-food.component.css']
})
export class SubmitterFoodComponent implements OnInit {
  @Input('group')
  public submitterFoodFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  @Language() lang:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {} 
    lkpReltnshpAffctdPrsnIds;
lkpContactContextIds;
  ngOnInit() {
      this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);
      this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds);
  }

}
