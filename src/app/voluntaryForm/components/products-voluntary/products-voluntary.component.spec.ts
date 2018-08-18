import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVoluntaryComponent } from './products-voluntary.component';

describe('ProductsVoluntaryComponent', () => {
  let component: ProductsVoluntaryComponent;
  let fixture: ComponentFixture<ProductsVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
