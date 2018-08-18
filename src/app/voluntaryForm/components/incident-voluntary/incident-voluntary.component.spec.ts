import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentVoluntaryComponent } from './incident-voluntary.component';

describe('IncidentVoluntaryComponent', () => {
  let component: IncidentVoluntaryComponent;
  let fixture: ComponentFixture<IncidentVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
