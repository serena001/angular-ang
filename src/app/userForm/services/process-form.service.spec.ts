import { TestBed, inject } from '@angular/core/testing';

import { ProcessFormService } from './process-form.service';

describe('ProcessFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessFormService]
    });
  });

  it('should ...', inject([ProcessFormService], (service: ProcessFormService) => {
    expect(service).toBeTruthy();
  }));
});
