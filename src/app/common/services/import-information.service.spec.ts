/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportInformationService } from './import-information.service';

describe('ImportInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportInformationService]
    });
  });

  it('should ...', inject([ImportInformationService], (service: ImportInformationService) => {
    expect(service).toBeTruthy();
  }));
});
