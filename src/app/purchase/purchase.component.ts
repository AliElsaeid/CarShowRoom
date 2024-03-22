import { Component  , ViewChild ,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  @ViewChild('purchaseForm') purchaseForm: any;
  showConfirmation = false;
  imageSrc = "assets/images/purchase_background.jpg";
  brands = ['Mercedes-Benz', 'Jeep', 'Jaguar','Alfa Romeo'];
  selectedBrand: string = '';
  models: { [key: string]: string[] } = {
    'Mercedes-Benz': ['A35 2023', 'C300 2023', 'E300 2023', 'S 500 2023', 'Gt 63 2023', 'Cla 200'],
    'Jeep': ['Jeep Wrangler', 'Jeep Grand Cherokee', 'Jeep Compass', 'Jeep Renegade', 'Jeep Gladiator', 'Jeep Cherokee'],
    'Jaguar': ['JaguarE-PACE', 'JaguarF-PACE', 'JaguarF-Type', 'JaguarXE', 'JaguarXE', 'JaguarXJ'],
    'Alfa Romeo': ['Giulia', 'Stelvio', 'Spider', 'Alfa Romeo 4C', 'Tonale', 'Quadrifoglio alfa romeo'],

  };

  onSubmit() {
   
    this.showConfirmation = true;
  }
}
