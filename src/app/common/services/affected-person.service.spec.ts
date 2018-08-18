/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AffectedPersonService } from './affected-person.service';

describe('AffectedPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffectedPersonService]
    });
  });

  it('should ...', inject([AffectedPersonService], (service: AffectedPersonService) => {
    expect(service).toBeTruthy();
  }));
});
