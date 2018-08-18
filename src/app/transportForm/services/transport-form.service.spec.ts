import { TestBed, inject } from '@angular/core/testing';

import { TransportFormService } from './transport-form.service';

describe('TransportFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportFormService]
    });
  });

  it('should ...', inject([TransportFormService], (service: TransportFormService) => {
    expect(service).toBeTruthy();
  }));
});
