/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubmitterService } from './submitter.service';

describe('SubmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitterService]
    });
  });

  it('should ...', inject([SubmitterService], (service: SubmitterService) => {
    expect(service).toBeTruthy();
  }));
});
