import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PrivacyNoticeService } from '../../services/privacy-notice.service';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.css']
})
export class PrivacyNoticeComponent implements OnInit {
@Input('group')
public privacyNoticeFrmGrp:FormGroup;
  constructor(private privacyNoticeService:PrivacyNoticeService) { }
lstReleaseInfo;
  ngOnInit() {
       this.privacyNoticeService.getLstReleaseInfo().then(lstReleaseInfo => this.lstReleaseInfo = lstReleaseInfo);

  }

}
