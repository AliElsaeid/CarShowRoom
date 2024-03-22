import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    email: string;
    password: string;
  }) {
    return this.http.post('http://localhost:3000/register', user);
  }

  login(user: { username: string; password: string }) {
    return this.http.post('http://localhost:3000/login', user);
  }
}
