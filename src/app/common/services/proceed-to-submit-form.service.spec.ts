/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProceedToSubmitFormService } from './proceed-to-submit-form.service';

describe('ProceedToSubmitFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProceedToSubmitFormService]
    });
  });

  it('should ...', inject([ProceedToSubmitFormService], (service: ProceedToSubmitFormService) => {
    expect(service).toBeTruthy();
  }));
});
