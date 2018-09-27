import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ClaimOfConfidentialityService } from '../../services/claim-of-confidentiality.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-claim-of-confidentiality',
  templateUrl: './claim-of-confidentiality.component.html',
  styleUrls: ['./claim-of-confidentiality.component.css']
})
export class ClaimOfConfidentialityComponent implements OnInit {
@Language() lang:string;
@Input('group')
public claimOfConfidentialityFrmGrp:FormGroup;
  constructor(
    private claimOfConfidentialityService:ClaimOfConfidentialityService,
    public locale: LocaleService) { }
 lkpPrivacyNoticeCbiIds;
  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);  
    this.claimOfConfidentialityService.getLkpPrivacyNoticeCbiIds().then(lkpPrivacyNoticeCbiIds => this.lkpPrivacyNoticeCbiIds = lkpPrivacyNoticeCbiIds);
  }

}
