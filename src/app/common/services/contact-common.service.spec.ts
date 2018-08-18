/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactCommonService } from './contact-common.service';

describe('ContactCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactCommonService]
    });
  });

  it('should ...', inject([ContactCommonService], (service: ContactCommonService) => {
    expect(service).toBeTruthy();
  }));
});
