import { TestBed, inject } from '@angular/core/testing';

import { FoodFormService } from './food-form.service';

describe('FoodFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodFormService]
    });
  });

  it('should ...', inject([FoodFormService], (service: FoodFormService) => {
    expect(service).toBeTruthy();
  }));
});
