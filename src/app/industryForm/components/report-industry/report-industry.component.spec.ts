/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportIndustryComponent } from './report-industry.component';

describe('ReportIndustryComponent', () => {
  let component: ReportIndustryComponent;
  let fixture: ComponentFixture<ReportIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
