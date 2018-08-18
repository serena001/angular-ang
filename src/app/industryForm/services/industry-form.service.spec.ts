import { TestBed, inject } from '@angular/core/testing';

import { IndustryFormService } from './industry-form.service';

describe('IndustryFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryFormService]
    });
  });

  it('should ...', inject([IndustryFormService], (service: IndustryFormService) => {
    expect(service).toBeTruthy();
  }));
});
