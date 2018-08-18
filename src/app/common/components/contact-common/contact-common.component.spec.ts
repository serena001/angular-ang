/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactCommonComponent } from './contact-common.component';

describe('ContactCommonComponent', () => {
  let component: ContactCommonComponent;
  let fixture: ComponentFixture<ContactCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
