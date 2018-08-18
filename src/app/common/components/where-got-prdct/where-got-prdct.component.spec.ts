/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhereGotPrdctComponent } from './where-got-prdct.component';

describe('WhereGotPrdctComponent', () => {
  let component: WhereGotPrdctComponent;
  let fixture: ComponentFixture<WhereGotPrdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereGotPrdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereGotPrdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
