import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PrivacyNoticeService } from '../../services/privacy-notice.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.css']
})
export class PrivacyNoticeComponent implements OnInit {
@Language() lang:string;
@Input('group')
public privacyNoticeFrmGrp:FormGroup;
  constructor(
    private privacyNoticeService:PrivacyNoticeService,
    public locale: LocaleService) { }
lstReleaseInfo;
  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
       this.privacyNoticeService.getLstReleaseInfo().then(lstReleaseInfo => this.lstReleaseInfo = lstReleaseInfo);

  }

}
