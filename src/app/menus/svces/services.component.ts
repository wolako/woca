import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'woca-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // @Input() services: string = '';
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {}
  
  serviceZoom: boolean = false;
  mesServices!: string;
  serviceImage!: string;
  serviceInfo!: string;
  servicePage!: string;

  selectService(serviceName: string) {
    this.mesServices = serviceName;

    switch (serviceName) {
      case 'Développement web':
        this.serviceImage = '../assets/images/12.png';
        this.serviceInfo = 'Nous nous occupons de vos sites ou applications web';
        this.servicePage = '/dev';
        break;
      case 'Marketing digital':
        this.serviceImage = '../assets/images/17.png';
        this.serviceInfo = 'Nous nous occupons du marketing de vos produits';
        this.servicePage = '/marketing';
        break;
      case 'Graphisme':
        this.serviceImage = '../assets/images/14.png';
        this.serviceInfo = 'Nous nous occupons de vos images';
        this.servicePage = '/graphisme';
        break;
      case 'Montage video':
        this.serviceImage = '../assets/images/18.png';
        this.serviceInfo = 'Nous nous occupons du montage de vos videos';
        this.servicePage = '/mont-video';
        break;
      default:
        this.serviceImage = '';
        this.serviceInfo = '';
        this.servicePage = '';
        break;
    }
  }

  redirectToServicePage(): void {
    if (this.servicePage) {
      // Redirige vers la page spécifique du service
      this.router.navigate([this.servicePage]);
    }
  }

}



