import { TestBed, inject } from '@angular/core/testing';

import { CosmeticFormService } from './cosmetic-form.service';

describe('CosmeticFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosmeticFormService]
    });
  });

  it('should ...', inject([CosmeticFormService], (service: CosmeticFormService) => {
    expect(service).toBeTruthy();
  }));
});
