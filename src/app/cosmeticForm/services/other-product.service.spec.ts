import { TestBed, inject } from '@angular/core/testing';

import { OtherProductService } from './other-product.service';

describe('OtherProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherProductService]
    });
  });

  it('should ...', inject([OtherProductService], (service: OtherProductService) => {
    expect(service).toBeTruthy();
  }));
});
