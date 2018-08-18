import { TestBed, inject } from '@angular/core/testing';

import { OtherProductsService } from './other-products.service';

describe('OtherProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherProductsService]
    });
  });

  it('should ...', inject([OtherProductsService], (service: OtherProductsService) => {
    expect(service).toBeTruthy();
  }));
});
