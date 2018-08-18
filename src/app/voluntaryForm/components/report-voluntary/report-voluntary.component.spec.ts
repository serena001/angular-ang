import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVoluntaryComponent } from './report-voluntary.component';

describe('ReportVoluntaryComponent', () => {
  let component: ReportVoluntaryComponent;
  let fixture: ComponentFixture<ReportVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
