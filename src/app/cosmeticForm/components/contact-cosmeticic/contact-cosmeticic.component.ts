import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';

@Component({
  selector: 'app-contact-cosmeticic',
  templateUrl: './contact-cosmeticic.component.html',
  styleUrls: ['./contact-cosmeticic.component.css']
})
export class ContactCosmeticicComponent implements OnInit {
  @Input('group')
  public contactCosmeticFrmGrp:FormGroup;
	@Input('index')
  public index:string;
  @Input('formName')
  public formName:string;	
  @Input('sectionName')
  public sectionName:string;
   lkpReltnshpAffctdPrsnIds;
  lkpContactContextIds;
  @Language() lang:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {} 

  ngOnInit() {
     this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);
  this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);

  }

}
