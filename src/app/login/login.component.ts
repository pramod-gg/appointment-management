import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  email: string = '';
  password: string = '';

  isPasswordValid(): boolean {
    const passwordRegex =
      /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(this.password);
  }

  showPassword: boolean = false;

  // Rest of your component code

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    // Handle login logic here
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const passwordRegex = /^.{6,}$/;

    if (!passwordRegex.test(this.password)) {
      console.log('Password must be at least 6 characters long');
      // Display an error message or perform any other actions
      return;
    }
    // You can implement your own login logic, such as making an API request

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'text', // Specify the response type as text
      }),
    };

    // this.http.post<any>('http://localhost:8000/api/v1/user/login', loginData)
    this.http
      .post<any>('http://localhost:8080/api/auth/signin', loginData, {
        observe: 'response',
        headers: { skip: 'true' },
      })
      .subscribe(
        (response) => {
          // handle successful login response
          if (response.status === 200) {
            localStorage.setItem('token', response.body.token);
            console.log('Login successful');
            console.log(response.body);
            //route to view-appointments
            this.router.navigate(['/view-appointments']);
          }
        },
        (error) => {
          // handle error
          console.error('login failed');
          console.log(error);
        }
      );
  }
}
