import { TestBed, inject } from '@angular/core/testing';

import { IncidentVoluntaryService } from './incident-voluntary.service';

describe('IncidentVoluntaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentVoluntaryService]
    });
  });

  it('should ...', inject([IncidentVoluntaryService], (service: IncidentVoluntaryService) => {
    expect(service).toBeTruthy();
  }));
});
