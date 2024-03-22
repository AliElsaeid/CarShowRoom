
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cars',
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {



  manufacturers = [
    {
      name: 'Mercedes-Benz',
      image: 'assets/manufacturers-images/Mercedes-Logo.svg.png',
      models: [
        { name: 'A35 2023', img: 'assets/modelIMG/A35 2023.jpg' },
        { name: 'C300 2023', img: 'assets/modelIMG/C300 2023.jpg' },
        { name: 'E300 2023', img: 'assets/modelIMG/E300-2023.jpg' },
        { name: 'S 500 2023', img:'assets/modelIMG/S 500 2023.jpg' },
        { name: 'Gt 63 2023', img:'assets/modelIMG/Gt 63 2023.jpg' },
        { name: 'Cla 200',img: 'assets/modelIMG/Cla 200.jpg' },
        
      ]
    },
    {
      name: 'Jeep',
      image: 'assets/manufacturers-images/jeep.png',
      models: [
        { name: 'Jeep Wrangler',img:'assets/modelIMG/Jeep Wrangler.jpg' },
        { name: 'Jeep Grand Cherokee',img:'assets/modelIMG/Jeep Grand Cherokee.png' },
        { name: 'Jeep Compass',img:'assets/modelIMG/Jeep Compass.webp' },
        { name: 'Jeep Renegade',img:'assets/modelIMG/jerenagade.jpg' },
        { name: 'Jeep Gladiator',img:'assets/modelIMG/Jeep Gladiator.jpg' },
        {name:'Jeep Cherokee',img:'assets/modelIMG/Jeep Cherokee.webp'},
        
      ]
    },
    {
      name: 'Jaguar',
      image: 'assets/manufacturers-images/Jaguar-Logo-2012.png',
      models: [
        { name: 'JaguarE-PACE', img:'assets/modelIMG/JaguarE-PACE.jpg' },
        { name: 'JaguarF-PACE',img:'assets/modelIMG/JaguarF-PACE.jpg' },
        { name: 'JaguarF-Type', img:'assets/modelIMG/JaguarF-Type.jpg' },
        { name: 'JaguarXE',img:'assets/modelIMG/JaguarXE.jpg' },
        { name: 'JaguarXF',img:'assets/modelIMG/XF.jpg' },
        { name: 'JaguarXJ',img:'assets/modelIMG/JaguarXJ.jpg' },
      ]
    },
    {
      name: 'Alfa Romeo',
      image: 'assets/manufacturers-images/afr.png',
      models: [
        { name: 'Giulia',img:'assets/modelIMG/giulia.jpg' },
        { name:'Stelvio',img:'assets/modelIMG/stelvio.jpg'},
        { name: 'Spider',img:'assets/modelIMG/Spider.jpg' },
        { name: 'Alfa Romeo 4C',img:'assets/modelIMG/Alfa Romeo 4C.jpg' },
        { name: 'Tonale',img:'assets/modelIMG/tonale.jpg' },
        { name: 'Quadrifoglio alfa romeo',img:'assets/modelIMG/qar.jpg' },
      ]
    },
  ];


  selectedModelDetails: any;
  showDetailsFlag: boolean = false;

  closeDetails() {
    // Logic to close the details section
    // For example, you can set the flag to hide the details
    this.showDetailsFlag = false;
    this.selectedModelDetails = null; //
  }

  showDetails(manufacturer: string, model: string): void {
    const modelDetails = {
      'Mercedes-Benz': {
        'A35 2023': {
          title: 'A35 2023',
          description: 'The Mercedes-Benz A35 2023 is a high-performance compact car known for its sporty design and powerful capabilities. Featuring a turbocharged engine, it delivers an exhilarating driving experience. With advanced technology and luxurious amenities, the A35 2023 combines performance and elegance, making it a desirable choice for enthusiasts seeking a dynamic and stylish compact vehicle.',
          price: 'price $50,000',
          image: 'assets/modelIMG/A35 2023.jpg'
        },
        'C300 2023': {
          title: 'C300 2023',
          description: 'The Mercedes-Benz C300 2023 is a sophisticated and luxurious sedan that blends performance with elegance. Renowned for its sleek design, advanced technology, and premium features, the C300 offers a refined driving experience. Powered by a capable engine, it delivers a perfect balance of power and efficiency. With a comfortable and well-appointed interior, the C300 2023 represents the epitome of modern luxury sedans, appealing to those who seek both style and substance in their automotive choice.',
          price: 'price $60,000',
          image: 'assets/modelIMG/C300 2023.jpg'
        },
        'E300 2023': {
          title: 'E300 2023',
          description: 'The Mercedes-Benz E300 2023 is a sophisticated luxury sedan that exemplifies elegance and technological prowess. Renowned for its refined design, the E300 combines a powerful yet efficient engine with cutting-edge features, offering a smooth and comfortable ride. Inside, the cabin boasts premium materials, advanced infotainment, and safety technologies, making the E300 2023 a flagship model for those seeking a perfect blend of performance and opulence in a midsize sedan.',
          price: 'price $70,000',
          image: 'assets/modelIMG/E300-2023.jpg'
        },
         'S 500 20203':{
          title: 'S 500 2030',
          description:'The Mercedes-Benz S 500 2023 is a flagship luxury sedan that redefines sophistication and performance. Known for its opulent design, advanced technology, and powerful capabilities, the S 500 offers a driving experience that transcends expectations. Under the hood, a robust engine delivers a harmonious blend of power and efficiency. The interior is a sanctuary of luxury, featuring premium materials, cutting-edge infotainment, and innovative safety features. With its graceful yet commanding presence, the S 500 2023 stands as a pinnacle of automotive excellence, catering to discerning drivers who seek the epitome of prestige and comfort',
          price:'price 80,000',
          image:'assets/modelIMG/S 500 2022.jpg'
         },
         'Gt 63 2023':{
          title:'Gt 63 2023',
          description:'The Mercedes-AMG GT 63 2023 is a high-performance four-door coupe that seamlessly combines breathtaking speed with luxurious comfort. As part of the renowned AMG lineup, this model boasts a muscular yet elegant design, hinting at the extraordinary power that lies beneath the hood. Powered by a potent engine, the GT 63 accelerates with authority, delivering an exhilarating driving experience. Inside, the cabin is a masterpiece of craftsmanship, featuring premium materials and state-of-the-art technology. With its dynamic performance and refined aesthetics, the Mercedes-AMG GT 63 2023 caters to enthusiasts who crave both speed and sophistication in a single, extraordinary package.',
          price:'price 90,000',
          image:'assets/modelIMG/Gt 63 2023.jpg'
         },
         'Cla 200':{
          title:'Cla 200',
          description:'The Mercedes-Benz CLA 200 is a stylish and compact luxury sedan that combines sporty design with advanced technology. Known for its sleek and aerodynamic profile, the CLA 200 exudes modern elegance. Under the hood, it is powered by an efficient yet responsive engine, delivering a balance of performance and fuel efficiency. Inside the cabin, the CLA 200 offers a sophisticated interior with high-quality materials and cutting-edge infotainment features. With its dynamic driving characteristics and attention to detail, the CLA 200 caters to drivers who seek a premium compact sedan that not only looks impressive on the road but also provides a refined and comfortable driving experience.',
          price:'price 70,000',
          image:'assests/modelIMG/Cla 200.jpg',
         },
         'Jeep Cherokee':{
          title:'Jeep Cherokee',
          description:'The Jeep Cherokee is a compact SUV with a distinctive design and versatile capabilities. It provides a comfortable ride for daily commuting and is equipped to handle various terrains, making it suitable for both city life and outdoor adventures.',
          price:'price 98,000',
          image:'assests/modelIMG/Jeep Cherokee.webp'

         }

        
        // Add details for other models
      },
      'Jeep': {
        'Jeep Wrangler':{
          title:'Jeep Wrangler',
          description:'The Jeep Wrangler is an iconic off-road SUV known for its rugged design and exceptional off-road capabilities. It combines classic Jeep styling with modern features, making it a popular choice for adventure enthusiasts.',
          price:'price 50,000',
          image:'assets/modelIMG/Jeep Wrangler.jpg'
        },
        'Jeep Grand Cherokee':{
          title:'Jeep Grand Cherokee',
          description:'The Jeep Cherokee is a compact SUV with a distinctive design and versatile capabilities. It provides a comfortable ride for daily commuting and is equipped to handle various terrains, making it suitable for both city life and outdoor adventures.',
          price:'price 60,000',
          image:'assets/modelIMG/Jeep Grand Cherokee.png'
        },
        'Jeep Compass':{
          title:'Jeep Compass',
          description:'The Jeep Compass is a compact crossover SUV that combines style with practicality. It offers a comfortable interior, modern technology features, and a capable four-wheel-drive system, making it a well-rounded choice for urban and off-road driving.',
          price:'price 65,000',
          image:'assets/modelIMG/Jeep Compass.webp'
        },
        'Jeep Renegade':{
          title:'Jeep Renegade',
          description:'The Jeep Renegade is a subcompact SUV designed for those seeking a smaller and more maneuverable off-road vehicle. With its distinctive styling and compact size, the Renegade is suitable for urban environments while maintaining Jeeps rugged character.',
          price:'price 67,000',
          image:'assets/modelIMG/jerenagade.jpg',

        },
        'Jeep Gladiator':{
          title:'Jeep Gladiator',
          description:'The Jeep Gladiator is a unique midsize pickup truck that shares its platform with the Wrangler. It combines the off-road capabilities of the Wrangler with the utility of a pickup bed, offering a versatile solution for those who need both off-road prowess and hauling capabilities.',
          price:'price 78,000',
          image:'assets/modelIMG/Jeep Gladiator.jpg'
        },
        // Add details for Jeep models
      },
      'Jaguar': {
        'JaguarE-PACE':{
          title:'Jaguar E-PACE',
          description:'The Jaguar E-PACE is a compact luxury SUV that offers a sporty and agile driving experience. With its dynamic design, advanced safety features, and a choice of engines, the E-PACE appeals to those looking for a smaller SUV without compromising on performance and luxury.',
          price:'price 98,000',
          image:'assets/modelIMG/JaguarE-PACE.jpg'
        },
        'JaguarF-PACE':{
          title:'Jaguar F-PACE',
          description:'The Jaguar F-PACE is a luxury SUV that combines Jaguars performance heritage with the practicality of an SUV. It features a striking design, a well-crafted interior, and a range of engines, providing both style and versatility for SUV enthusiasts.',
          price:'price 59,000',
          image:'assets/modelIMG/JaguarF-PACE.jpg'
        },
        'JaguarF-Type':{
          title:'Jaguar F-Type',
          description:'The Jaguar F-Type is a stylish and performance-oriented sports car. Known for its sleek design and powerful engine options, the F-Type delivers a thrilling driving experience. It combines luxurious features with dynamic performance, making it a top choice for sports car enthusiasts',
          price:'price 77,000',
          image:'assets/modelIMG/JaguarF-Type.jpg'
        },
        'JaguarXE':{
          title:'Jaguar XE',
          description:'The Jaguar XE is a compact luxury sedan that offers a perfect balance of performance and elegance. With a distinctive design, advanced technology, and responsive handling, the XE provides a refined driving experience in the competitive compact luxury sedan segment.',
          price:'price 48,000',
          image:'assets/modelIMG/JaguarXE.jpg'
        },
        'JaguarXF':{
          title:'Jaguar XF',
          description:'The Jaguar XF is a midsize luxury sedan that stands out for its sophisticated design and premium interior. It features advanced technology, a range of powerful engines, and a comfortable ride, making it a compelling option for those seeking a blend of performance and luxury.',
          price:'price 39,000',
          image:'assets/modelIMG/XF.jpg'
        },
        'JaguarXJ':{
          title:'Jaguar XJ',
          description:'The Jaguar XJ is a full-size luxury sedan that exemplifies elegance and innovation. Known for its luxurious interior, cutting-edge technology, and smooth ride, the XJ caters to those who appreciate a spacious and opulent driving experience.',
          price:'price 88,000',
          image:'assets/modelIMG/JaguarXJ.jpg'
        },



        // Add details for Jaguar models
      },
      'Alfa Romeo': {
        'Giulia':{
          title:'Giulia',
          description:'The 2024 Alfa Romeo Giulia sports best-in-class horsepower and a top speed nearing 150 MPH. Explore this Alfa Romeo sedans features and performance.',
          price:'88,000',
          image:'assets/modelIMG/giulia.jpg'
        },
        'Stelvio':{
         title:'setlvio',
         description:'The Alfa Romeo Stelvio is a car produced by the Italian manufacturer Alfa Romeo since 2016. As a D-segment model it slots above the smaller Tonale model in the marques SUV range. ',
         price:'90,000',
         image:'assets/modelIMG/stelvio.jpg'
        },
        'Spider':{
          title:'Spider',
          description:'The Alfa Romeo Spider is a two-seater, front-engined, rear-drive roadster manufactured and marketed by Alfa Romeo from 1966 to 1994 in four distinct generations, or "series", each with modifications ranging from modest to extensive',
          price:'price 87,000',
          image:'assets/modelIMG/Spider.jpg'
        },
        'Alfa Romeo 4C':{
          title:'Alfa Romeo 4C',
          description:'The Alfa Romeo 4C is a mid-engined sports car that was produced by Italian car manufacturer Alfa Romeo. Unveiled at the 2013 Geneva Motor Show, the 4C was initially only available as a coupé, with a spider body style coming a few years later in 2015. The name 4C refers to the straight-four engine.',
          price:'76,000',
          image:'assets/modelIMG/Alfa Romeo 4C',

        },
        'Tonale':{
          title:'Tonale',
          description:'The Alfa Romeo Tonale is a car produced by Italian manufacturer Alfa Romeo since February 2022. A c-segment model, it slots below the Alfa Romeo Stelvio in the marques crossover SUV range.',
          price:'93,000',
          image:'assets/modelIMG/tonale.jpg'
        },
        'Quadrifoglio alfa romeo':{
          title:'Quadrifoglio alfa romeo',
          description:'The Quadrifoglio is the brand used by the Italian auto manufacturer Alfa Romeo to indicate a high performance model, similar to that of BMW M, Mercedes-AMG, Fiat Abarth and Audi S/RS',
          price:'79,000',
          image:'assets/modelIMG/qar.jpg'
        }
      },
    };
  
    const modelTitleElement = document.getElementById('modelTitle') as HTMLHeadingElement;
    const detailSectionElement = document.getElementById('detailSection') as HTMLDivElement;

    if (modelTitleElement && detailSectionElement) {
      const selectedModelDetails = (modelDetails as any)[manufacturer] && (modelDetails as any)[manufacturer][model];

      if (selectedModelDetails) {
        this.selectedModelDetails = selectedModelDetails; // Set selectedModelDetails property
        detailSectionElement.style.display = 'block';
        detailSectionElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }
    }
  }
}

