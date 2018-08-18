/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClaimOfConfidentialityService } from './claim-of-confidentiality.service';

describe('ClaimOfConfidentialityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClaimOfConfidentialityService]
    });
  });

  it('should ...', inject([ClaimOfConfidentialityService], (service: ClaimOfConfidentialityService) => {
    expect(service).toBeTruthy();
  }));
});
