import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import {PurchaseComponent } from './purchase/purchase.component';
import { ContactComponent } from './contact/contact.component';
import {BrandsComponent} from './brands/brands.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent,PurchaseComponent,CarsComponent,ContactComponent,BrandsComponent,RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  logoImagePath='assets/images/logo.png'
}
