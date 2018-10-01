import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-submitter-industry',
  templateUrl: './submitter-industry.component.html',
  styleUrls: ['./submitter-industry.component.css']
})
export class SubmitterIndustryComponent implements OnInit {

  @Input('group')
  public submitterIndustryFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  @Input('sectionName')
  public sectionName:string;
  lkpContactContextIds;
  @Language() lang:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {} 

  ngOnInit() {
     this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds); 
  }

}
