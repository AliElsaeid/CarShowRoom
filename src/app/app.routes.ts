import { Routes } from '@angular/router';
import {PurchaseComponent } from './purchase/purchase.component';
import {BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'purchase', component: PurchaseComponent},
    {path: 'brands', component: BrandsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cars', component: CarsComponent},
    
    
]

