import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVoluntaryComponent } from './product-voluntary.component';

describe('ProductVoluntaryComponent', () => {
  let component: ProductVoluntaryComponent;
  let fixture: ComponentFixture<ProductVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
