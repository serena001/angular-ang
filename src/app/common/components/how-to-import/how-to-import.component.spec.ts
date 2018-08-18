/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToImportComponent } from './how-to-import.component';

describe('HowToImportComponent', () => {
  let component: HowToImportComponent;
  let fixture: ComponentFixture<HowToImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
