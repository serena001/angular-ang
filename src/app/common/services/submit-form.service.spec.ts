/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubmitFormService } from './submit-form.service';

describe('SubmitFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitFormService]
    });
  });

  it('should ...', inject([SubmitFormService], (service: SubmitFormService) => {
    expect(service).toBeTruthy();
  }));
});
