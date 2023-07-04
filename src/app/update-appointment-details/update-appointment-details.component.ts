import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../create-appointment/appointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-update-appointment-details',
  templateUrl: './update-appointment-details.component.html',
  styleUrls: ['./update-appointment-details.component.css'],
})
export class UpdateAppointmentDetailsComponent {
  id!: string;
  appointment: Appointment = {} as Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MasterService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const appointmentId = params.get('id');
      console.log(appointmentId);
      this.service.GetAppointment(appointmentId!).subscribe((data: any) => {
        this.appointment = data;
      });
    });
  }

  submitForm() {
    const newAppointment: Appointment = {
      id: this.appointment.id,
      patientName: this.appointment.patientName,
      date: this.appointment.date,
      time: this.appointment.time,
      notes: this.appointment.notes,
    };
    console.log(this.appointment);
    console.log(newAppointment);

    this.service.UpdateAppointment(this.id, newAppointment).subscribe(() => {
      this.router.navigate(['/view-appointments']);
    });
  }
}
