import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerVoluntaryComponent } from './manufacturer-voluntary.component';

describe('ManufacturerVoluntaryComponent', () => {
  let component: ManufacturerVoluntaryComponent;
  let fixture: ComponentFixture<ManufacturerVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
