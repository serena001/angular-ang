/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminIndustryComponent } from './admin-industry.component';

describe('AdminIndustryComponent', () => {
  let component: AdminIndustryComponent;
  let fixture: ComponentFixture<AdminIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
