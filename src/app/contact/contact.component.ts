import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  imgsrc='assets/images/contactus.jpg';
  showConfirmation = false;
  onSubmit() {
 
    this.showConfirmation = true;
  }

 
}
