/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationLocaleService } from './translation-locale.service';

describe('TranslationLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationLocaleService]
    });
  });

  it('should ...', inject([TranslationLocaleService], (service: TranslationLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
