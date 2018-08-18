import { Component, OnInit ,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ClaimOfConfidentialityService } from '../../services/claim-of-confidentiality.service';

@Component({
  selector: 'app-claim-of-confidentiality',
  templateUrl: './claim-of-confidentiality.component.html',
  styleUrls: ['./claim-of-confidentiality.component.css']
})
export class ClaimOfConfidentialityComponent implements OnInit {
@Input('group')
public claimOfConfidentialityFrmGrp:FormGroup;
  constructor(private claimOfConfidentialityService:ClaimOfConfidentialityService) { }
 lkpPrivacyNoticeCbiIds;
  ngOnInit() {  
    this.claimOfConfidentialityService.getLkpPrivacyNoticeCbiIds().then(lkpPrivacyNoticeCbiIds => this.lkpPrivacyNoticeCbiIds = lkpPrivacyNoticeCbiIds);
  }

}
