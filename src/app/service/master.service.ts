import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetAppointments() {
    return this.http.get('http://localhost:8080/appointments');
  }

  GetAppointment(id: String) {
    return this.http.get(`http://localhost:8080/appointments/${id}`);
  }

  UpdateAppointment(id: String, data: any) {
    return this.http.put(`http://localhost:8080/appointments/${id}`, data);
  }

  DeleteAppointment(id: String) {
    return this.http.delete(`http://localhost:8080/appointments/${id}`);
  }
}
