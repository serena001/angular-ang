import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';

@Component({
  selector: 'app-submitter-transport',
  templateUrl: './submitter-transport.component.html',
  styleUrls: ['./submitter-transport.component.css']
})
export class SubmitterTransportComponent implements OnInit {

 @Input('group')
  public submitterTransportFrmGrp:FormGroup;
  @Input('sectionName')
  public sectionName:string;
    @Input('formName')
  public formName:string;
@Input('index')
public index:string; 
    lkpReltnshpAffctdPrsnIds;
lkpContactContextIds;
@Language() lang:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {} 

  ngOnInit() {
          this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds); 
     this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds); 

  }

}
