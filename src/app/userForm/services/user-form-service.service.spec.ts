import { TestBed, inject } from '@angular/core/testing';

import { UserFormServiceService } from './user-form-service.service';

describe('UserFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormServiceService]
    });
  });

  it('should ...', inject([UserFormServiceService], (service: UserFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
