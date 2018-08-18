/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemoveSectionService } from './remove-section.service';

describe('RemoveSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveSectionService]
    });
  });

  it('should ...', inject([RemoveSectionService], (service: RemoveSectionService) => {
    expect(service).toBeTruthy();
  }));
});
