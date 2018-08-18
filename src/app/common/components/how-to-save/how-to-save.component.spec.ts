/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToSaveComponent } from './how-to-save.component';

describe('HowToSaveComponent', () => {
  let component: HowToSaveComponent;
  let fixture: ComponentFixture<HowToSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
