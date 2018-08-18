import { TestBed, inject } from '@angular/core/testing';

import { ConsumerFormService } from './consumer-form.service';

describe('ConsumerFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumerFormService]
    });
  });

  it('should ...', inject([ConsumerFormService], (service: ConsumerFormService) => {
    expect(service).toBeTruthy();
  }));
});
