import { TestBed, inject } from '@angular/core/testing';

import { UserFormServicePostInformationService } from './user-form-service-post-information.service';

describe('UserFormServicePostInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormServicePostInformationService]
    });
  });

  it('should ...', inject([UserFormServicePostInformationService], (service: UserFormServicePostInformationService) => {
    expect(service).toBeTruthy();
  }));
});
