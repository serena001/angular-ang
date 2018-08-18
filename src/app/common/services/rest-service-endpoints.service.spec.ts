import { TestBed, inject } from '@angular/core/testing';

import { RestServiceEndpointsService } from './rest-service-endpoints.service';

describe('RestServiceEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestServiceEndpointsService]
    });
  });

  it('should ...', inject([RestServiceEndpointsService], (service: RestServiceEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
