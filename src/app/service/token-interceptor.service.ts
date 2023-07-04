// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenInterceptorService implements HttpInterceptor {
//   constructor() {}

//   // intercept(
//   //   request: HttpRequest<any>,
//   //   next: HttpHandler
//   // ): Observable<HttpEvent<any>> {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     console.log(token);
//   //     // request.headers.set('Authorization', `Bearer ${token}`);
//   //     console.log(request.headers.append('Authorization', `Bearer ${token}`));
//   //   }
//   //   console.log(request.headers);
//   //   return next.handle(request);
//   // }

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // Get the bearer token from your authentication service
//     const bearerToken = localStorage.getItem('token');

//     if (request.headers.get('skip')) {
//       return next.handle(request);
//     } else {
//       // Clone the request and add the bearer token as the Authorization header
//       const authRequest = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       // Pass the modified request to the next interceptor or the HttpClient if there are no more interceptors
//       return next.handle(authRequest);
//     }
//   }
// }
