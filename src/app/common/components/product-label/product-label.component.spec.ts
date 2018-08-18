/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductLabelComponent } from './product-label.component';

describe('ProductLabelComponent', () => {
  let component: ProductLabelComponent;
  let fixture: ComponentFixture<ProductLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
