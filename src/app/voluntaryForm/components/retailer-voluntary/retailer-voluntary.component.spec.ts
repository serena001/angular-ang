import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerVoluntaryComponent } from './retailer-voluntary.component';

describe('RetailerVoluntaryComponent', () => {
  let component: RetailerVoluntaryComponent;
  let fixture: ComponentFixture<RetailerVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
