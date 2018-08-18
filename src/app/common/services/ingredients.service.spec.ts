import { TestBed, inject } from '@angular/core/testing';

import { IngredientsService } from './ingredients.service';

describe('IngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsService]
    });
  });

  it('should ...', inject([IngredientsService], (service: IngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
