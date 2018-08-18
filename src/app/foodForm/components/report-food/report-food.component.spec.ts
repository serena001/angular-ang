/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportFoodComponent } from './report-food.component';

describe('ReportFoodComponent', () => {
  let component: ReportFoodComponent;
  let fixture: ComponentFixture<ReportFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
