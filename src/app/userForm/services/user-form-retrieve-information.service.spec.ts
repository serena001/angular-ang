import { TestBed, inject } from '@angular/core/testing';

import { UserFormRetrieveInformationService } from './user-form-retrieve-information.service';

describe('UserFormRetrieveInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormRetrieveInformationService]
    });
  });

  it('should ...', inject([UserFormRetrieveInformationService], (service: UserFormRetrieveInformationService) => {
    expect(service).toBeTruthy();
  }));
});
