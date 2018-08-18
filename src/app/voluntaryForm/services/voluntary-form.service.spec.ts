import { TestBed, inject } from '@angular/core/testing';

import { VoluntaryFormService } from './voluntary-form.service';

describe('VoluntaryFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoluntaryFormService]
    });
  });

  it('should ...', inject([VoluntaryFormService], (service: VoluntaryFormService) => {
    expect(service).toBeTruthy();
  }));
});
