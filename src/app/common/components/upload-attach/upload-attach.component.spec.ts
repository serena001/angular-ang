/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadAttachComponent } from './upload-attach.component';

describe('UploadAttachComponent', () => {
  let component: UploadAttachComponent;
  let fixture: ComponentFixture<UploadAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
