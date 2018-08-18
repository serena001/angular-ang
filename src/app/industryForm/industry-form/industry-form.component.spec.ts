/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndustryFormComponent } from './industry-form.component';

describe('IndustryFormComponent', () => {
  let component: IndustryFormComponent;
  let fixture: ComponentFixture<IndustryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
