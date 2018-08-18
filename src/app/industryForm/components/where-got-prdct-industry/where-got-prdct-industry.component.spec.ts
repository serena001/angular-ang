/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhereGotPrdctIndustryComponent } from './where-got-prdct-industry.component';

describe('WhereGotPrdctIndustryComponent', () => {
  let component: WhereGotPrdctIndustryComponent;
  let fixture: ComponentFixture<WhereGotPrdctIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereGotPrdctIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereGotPrdctIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
