/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportCosmeticComponent } from './report-cosmetic.component';

describe('ReportCosmeticComponent', () => {
  let component: ReportCosmeticComponent;
  let fixture: ComponentFixture<ReportCosmeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCosmeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCosmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
