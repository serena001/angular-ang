/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClaimOfConfidentialityComponent } from './claim-of-confidentiality.component';

describe('ClaimOfConfidentialityComponent', () => {
  let component: ClaimOfConfidentialityComponent;
  let fixture: ComponentFixture<ClaimOfConfidentialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimOfConfidentialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimOfConfidentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
