import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import {BrandsComponent } from '../brands/brands.component';
import axios from 'axios';
import { HttpClientModule } from '@angular/common/http';



import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RegisterComponent, ReactiveFormsModule,BrandsComponent,RouterLink, RouterLinkActive, RouterOutlet,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageSrc = 'assets/images/site_slider_filename.jpg';
  imageSrc1 = 'assets/images/logo.png';
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      loginEmail: ['', Validators.required],
      loginPassword: ['', Validators.required],
    });
  }

  onLoginSubmit() {
    if (this.form.valid) {
      const loginData = {
        email: this.form.value.loginEmail,
        password: this.form.value.loginPassword,
      };

      // Use Axios for making the login API call
      axios.post('http://localhost:3000/login', loginData)
        .then((response) => {
          console.log(response.data); // Handle success, response is already parsed JSON
          // Assuming the server returns a token on successful login
          // You can handle the token as needed (e.g., store it in localStorage)
          // For now, navigate to the BrandsComponent on successful login
          this.router.navigate(['/brands']);
        })
        .catch((error) => {
          console.error(error); // Handle error
          // Optionally, show an error message to the user
        });
    }
  }
}

export const routes: Routes = [
  { path: 'brands', component: BrandsComponent },
  { path: 'register', component: RegisterComponent },
];