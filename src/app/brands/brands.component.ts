import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-brands',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  imageSrc = 'assets/images/site_slider_filename.jpg';
  categories = [
    {
      id: 'category1',
      logo: 'assets/images/MB.jpg',
      name: 'Mercedes-Benz',
      description: 'Mercedes-Benz is a leading German luxury car manufacturer, known for pioneering safety, performance, and connectivity innovations. The brand prioritizes sustainability with environmentally friendly technologies. Notable models include the C-Class, E-Class, and S-Class sedans, GLE and GLC SUVs, and the iconic G-Class. The AMG division produces high-performance variants, emphasizing thrilling driving experiences. Mercedes-Benz represents luxury, elegance, and cutting-edge automotive engineering on the global stage.',
    },
    {
      id: 'category2',
      logo: 'assets/images/Jeep.jpg',
      name: 'Jeep',
      description: 'Jeep, established in 1941, is famed for rugged SUVs with distinctive design and off-road capabilities. From compact to larger models like Wagoneer, Jeeps balance on-road comfort and off-road prowess. The iconic Wrangler, known for its open-top design, showcases advanced 4x4 systems. With modern technology and safety features, Jeeps attract outdoor enthusiasts, fostering a loyal fan base.',
  },
  {
      id: 'category3',
      logo: 'assets/images/jaguar.webp',
      name: 'Jaguar',
      description: 'Jaguar, a British luxury brand since the 1920s, combines elegance and high performance in its lineup of cars and SUVs. Notable for SVR models, Jaguar emphasizes advanced technology and sustainability with the electric I-PACE. Renowned for stylish design and a perfect blend of comfort and performance.',
  },
  {
      id: 'category4',
      logo: 'assets/images/alfa-romeo-logo-7697.jpg',
      name: 'Alfa Romeo',
      description: 'Alfa Romeo, the Italian brand founded in 1910, is known for stylish, high-performance vehicles like the Giulia sedan and Stelvio SUV. The Quadrifoglio variants excel in powerful engines and agile handling. Interiors merge luxury with sportiness through premium materials and advanced tech. With a rich racing legacy, Alfa Romeo embodies Italian passion, offering a dynamic driving experience. In essence, it\'s celebrated for distinctive design and performance, epitomized by models like the Giulia and Stelvio.',
  },

  ];

  hoveredBrand: { name: string; description: string } | null = null;

  showInfo(category: any) {
    this.hoveredBrand = {
      name: category.name,
      description: category.description
    };
  }

  hideInfo() {
    this.hoveredBrand = null;
  }
}
