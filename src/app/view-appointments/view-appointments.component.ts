import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent {
  appointments: any[] = []; // Replace 'any' with the appropriate type for your appointment data

  constructor(private router: Router, private service: MasterService) {
    this.service.GetAppointments().subscribe((data: any) => {
      this.appointments = data;
    });
  }

  // Add any necessary logic to populate the 'appointments' array, such as fetching data from an API

  //logic to get data from http://localhost:8080/appointments and push it to the 'appointments' array

  // fetchAppointments() {
  //   const token = localStorage.getItem('token');
  //   console.log('token', token);
  //   if (token) {
  //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //     // const headers = new HttpHeaders({
  //     //   'Content-Type': 'application/json',
  //     //   Authorization: `Bearer ${token}`,
  //     // });

  //     const requestOptions = { headers: headers };
  //     this.http
  //       .get<any[]>('http://localhost:8080/appointments', requestOptions)
  //       .subscribe(
  //         (response) => {
  //           this.appointments = response;
  //         },
  //         (error) => {
  //           console.log('Error fetching appointments:', error);
  //         }
  //       );
  //   }
  // }
  // ngOnInit() {
  //   this.fetchAppointments();
  // }

  navigateToDetails(appointmentId: String) {
    this.router.navigate(['/appointment-details', appointmentId]);
  }
}
