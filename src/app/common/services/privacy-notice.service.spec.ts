/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivacyNoticeService } from './privacy-notice.service';

describe('PrivacyNoticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivacyNoticeService]
    });
  });

  it('should ...', inject([PrivacyNoticeService], (service: PrivacyNoticeService) => {
    expect(service).toBeTruthy();
  }));
});
