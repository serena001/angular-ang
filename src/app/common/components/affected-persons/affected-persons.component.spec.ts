/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AffectedPersonsComponent } from './affected-persons.component';

describe('AffectedPersonsComponent', () => {
  let component: AffectedPersonsComponent;
  let fixture: ComponentFixture<AffectedPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectedPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
