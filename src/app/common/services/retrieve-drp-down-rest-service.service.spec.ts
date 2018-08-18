import { TestBed, inject } from '@angular/core/testing';

import { RetrieveDrpDownRestServiceService } from './retrieve-drp-down-rest-service.service';

describe('RetrieveDrpDownRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveDrpDownRestServiceService]
    });
  });

  it('should ...', inject([RetrieveDrpDownRestServiceService], (service: RetrieveDrpDownRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
