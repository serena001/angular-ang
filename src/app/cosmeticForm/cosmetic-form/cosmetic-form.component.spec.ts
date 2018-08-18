/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CosmeticFormComponent } from './cosmetic-form.component';

describe('CosmeticFormComponent', () => {
  let component: CosmeticFormComponent;
  let fixture: ComponentFixture<CosmeticFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
