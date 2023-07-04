import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  id: string = Math.random().toString(36).substring(2, 15);
  email: string = '';
  password: string = '';
  name: string = '';
  role: string = 'DOCTOR';

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
    const registerData = {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      role: this.role,
    };

    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Name:', this.name);

    const passwordRegex = /^.{6,}$/;

    if (!passwordRegex.test(this.password)) {
      console.log('Password must be at least 6 characters long');
      // Display an error message or perform any other actions
      return;
    }
    // You can implement your own login logic, such as making an API request

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        responseType: 'text', // Specify the response type as text
      }),
    };

    // this.http.post<any>('http://localhost:8000/api/v1/user/login', loginData)
    this.http
      .post<any>('http://localhost:8080/api/auth/signup', registerData, {
        observe: 'response',
        headers: { skip: 'true' },
      })
      .subscribe(
        (response) => {
          // handle successful login response
          if (response.status === 200) {
            console.log('signup successful');
            console.log(response.body);
            //route to login page
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          // handle error
          console.log('signup failed');
          console.log(error);
          this.router.navigate(['/login']);
        }
      );
  }
}
