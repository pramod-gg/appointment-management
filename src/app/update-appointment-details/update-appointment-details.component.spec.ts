import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentDetailsComponent } from './update-appointment-details.component';

describe('UpdateAppointmentDetailsComponent', () => {
  let component: UpdateAppointmentDetailsComponent;
  let fixture: ComponentFixture<UpdateAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
