/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportTransportComponent } from './report-transport.component';

describe('ReportTransportComponent', () => {
  let component: ReportTransportComponent;
  let fixture: ComponentFixture<ReportTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
