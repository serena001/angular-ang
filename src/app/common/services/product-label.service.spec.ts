/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductLabelService } from './product-label.service';

describe('ProductLabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductLabelService]
    });
  });

  it('should ...', inject([ProductLabelService], (service: ProductLabelService) => {
    expect(service).toBeTruthy();
  }));
});
