/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactCosmeticicComponent } from './contact-cosmeticic.component';

describe('ContactCosmeticicComponent', () => {
  let component: ContactCosmeticicComponent;
  let fixture: ComponentFixture<ContactCosmeticicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCosmeticicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCosmeticicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
