// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
// import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
// import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CreateAppointmentComponent,
//     ViewAppointmentsComponent,
//     AppointmentDetailsComponent,
//   ],
//   imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { UpdateAppointmentDetailsComponent } from './update-appointment-details/update-appointment-details.component';
// import { TokenInterceptorService } from './service/token-interceptor.service';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },
  { path: 'view-appointments', component: ViewAppointmentsComponent },
  { path: 'appointment-details/:id', component: AppointmentDetailsComponent },
  {
    path: 'update-appointment-details/:id',
    component: UpdateAppointmentDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAppointmentComponent,
    ViewAppointmentsComponent,
    HeaderComponent,
    AppointmentDetailsComponent,
    RegisterComponent,
    UpdateAppointmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
