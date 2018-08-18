/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AffectedPersonComponent } from './affected-person.component';

describe('AffectedPersonComponent', () => {
  let component: AffectedPersonComponent;
  let fixture: ComponentFixture<AffectedPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectedPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
