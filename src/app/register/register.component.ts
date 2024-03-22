import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import axios from 'axios'; // Import Axios



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], // Corrected property name
})
export class RegisterComponent {
  imageSrc = 'assets/images/site_slider_filename.jpg';
  imageSrc1 = 'assets/images/logo.png';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegisterSubmit() {
    if (this.form.valid) {
      const userData = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        country: this.form.value.country,
        city: this.form.value.city,
        email: this.form.value.email,
        password: this.form.value.password,
      };

      // Use Axios for making the registration API call
      axios.post('http://localhost:3000/register', userData)
        .then((response) => {
          console.log(response.data); // Handle success, response is already parsed JSON
        })
        .catch((error) => {
          console.error(error); // Handle error
        });
    }
  }
}

export const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
];
