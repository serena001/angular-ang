/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhereGotPrdctService } from './where-got-prdct.service';

describe('WhereGotPrdctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhereGotPrdctService]
    });
  });

  it('should ...', inject([WhereGotPrdctService], (service: WhereGotPrdctService) => {
    expect(service).toBeTruthy();
  }));
});
