import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../create-appointment/appointment.model';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
})
export class AppointmentDetailsComponent {
  id!: string;
  appointment: Appointment = {} as Appointment; // Replace 'any' with the appropriate type for your appointment data

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MasterService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const appointmentId = params.get('id');
      console.log(appointmentId);
      // Use the appointmentId to fetch the appointment details from your backend or API
      this.service.GetAppointment(appointmentId!).subscribe((data: any) => {
        this.appointment = data;
      });
      // Assign the fetched appointment data to the 'appointment' object
      // Replace 'any' with the appropriate type for your appointment data
      // this.appointment = {
      //   id: appointmentId!.toString(),
      //   patientName: 'John Doe',
      //   date: '2023-06-28',
      //   time: '09:00 AM',
      //   notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // };
    });
  }

  //handle delete appointment
  deleteAppointment() {
    this.service.DeleteAppointment(this.appointment.id).subscribe(() => {
      this.router.navigate(['/view-appointments']);
    });
  }
}
