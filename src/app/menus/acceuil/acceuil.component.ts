import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import * as M from 'materialize-css';
import * as AOS from 'aos';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  // contactForm!: string;
  
  constructor(
    private elmtRef: ElementRef,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}
  
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elemts = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elemts);
    });

    this.viewportScroller.scrollToPosition([0, 0]);
    
    AOS.init();
  }

}
