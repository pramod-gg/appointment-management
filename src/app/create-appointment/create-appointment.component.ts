import { Component } from '@angular/core';
import { Appointment } from './appointment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
})
export class CreateAppointmentComponent {
  constructor(private http: HttpClient) {}

  appointment: Appointment = {
    id: '',
    patientName: '',
    date: '',
    time: '',
    notes: '',
  };

  submitForm() {
    // Here, you can implement the logic to submit the form data and save the appointment
    // You can send the data to an API, store it in a database, or perform any other actions as needed

    const appointment: Appointment = {
      id: Math.random().toString(36),
      patientName: this.appointment.patientName,
      date: this.appointment.date,
      time: this.appointment.time,
      notes: this.appointment.notes,
    };

    const token = localStorage.getItem('token');
    console.log('token', token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const requestOptions = { headers: headers };

      this.http
        .post<any>('http://localhost:8080/appointments', appointment, {
          observe: 'response',
        })
        .subscribe(
          (response) => {
            // handle successful login response
            if (response.status === 200) {
              console.log('Form submitted:', this.appointment);
            }
          },
          (error) => {
            // handle error
            console.log(error);
          }
        );
    }
  }
}
