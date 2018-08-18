import { Injectable } from '@angular/core';
import { lkpPrivacyNoticeCbiIds } from './claimOfConfidentialityDrpDown';

@Injectable()
export class ClaimOfConfidentialityService {

  constructor() { }
 getLkpPrivacyNoticeCbiIds():Promise<any> {
    return Promise.resolve(lkpPrivacyNoticeCbiIds);

  }
}
