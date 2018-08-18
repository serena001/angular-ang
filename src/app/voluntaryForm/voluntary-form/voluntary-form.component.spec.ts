import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryFormComponent } from './voluntary-form.component';

describe('VoluntaryFormComponent', () => {
  let component: VoluntaryFormComponent;
  let fixture: ComponentFixture<VoluntaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
