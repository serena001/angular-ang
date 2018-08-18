import { TestBed, inject } from '@angular/core/testing';

import { CosmeticProductService } from './cosmetic-product.service';

describe('CosmeticProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosmeticProductService]
    });
  });

  it('should ...', inject([CosmeticProductService], (service: CosmeticProductService) => {
    expect(service).toBeTruthy();
  }));
});
