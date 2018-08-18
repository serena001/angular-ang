import { Injectable } from '@angular/core';
import { lstReleaseInfo } from './privacyNoticeDrpDown';
@Injectable()
export class PrivacyNoticeService {
lstReleaseInfo;
  constructor() { }
getLstReleaseInfo():Promise<any> {
    return Promise.resolve(lstReleaseInfo);

  }
}
