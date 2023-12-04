import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import * as M from 'materialize-css';
import * as AOS from 'aos';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  contactForm!: string;
  
  slides = [
    {
      images:'../assets/images/29.png',
      serviceName: 'Graphisme',
      description: 'Pour tous vos besoins d\'image, nous vous proposons nos services'
    },
    {
      images:'../assets/images/26.png',
      serviceName: 'Développement Web',
      description: 'Pour tous vos besoins de site web ou application, nous vous proposons nos services'
    },
    {
      images:'../assets/images/31.png',
      serviceName: 'Marketing digital',
      description: 'Pour tous vos besoins Marketing, nous vous proposons nos services'
    },
    {
      images:'../assets/images/24.png',
      serviceName: 'Montage vidéo',
      description: 'Pour tous vos besoins de montage vidéo, nous vous proposons nos services'
    },
  ]

  constructor(
    private elmtRef: ElementRef,
    private renderer: Renderer2
  ) {}
  
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      const options: Partial<M.SliderOptions> = {
        duration: 500,
        indicators: false,
        height: 500,
      };
      var instances = M.Slider.init(elems, options);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elemts = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elemts);
    });

    AOS.init();
  }

}
