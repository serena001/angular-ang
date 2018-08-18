/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactsCosmeticComponent } from './contacts-cosmetic.component';

describe('ContactsCosmeticComponent', () => {
  let component: ContactsCosmeticComponent;
  let fixture: ComponentFixture<ContactsCosmeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsCosmeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCosmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
