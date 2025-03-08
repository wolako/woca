import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { AProposComponent } from 'src/app/menus/a-propos/a-propos.component';
import { AcceuilComponent } from 'src/app/menus/acceuil/acceuil.component';
import { ContactComponent } from 'src/app/menus/contact/contact.component';
import { ServicesComponent } from 'src/app/menus/svces/services.component';

@Component({
  selector: 'woca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  MobileSidenavOpen = false;
    
  toogleMobileSidenav() {
  this.MobileSidenavOpen =! this.MobileSidenavOpen; 
  }

  menus = [
    {
      path: '/accueil', Component: AcceuilComponent,
      name: 'Accueil'
    },
    {
      subItems:[
        {
          path: '/book-coaching',
          name: 'Coaching & Publication de livre',
        },
        {
          path: '/dev',
          name: 'Développement web',
        },
        {
          path: '/marketing',
          name: 'Marketing digital',
        },
        {
          path: '/graphisme',
          name: 'Graphisme créatif',
        },
        {
          path: '/mont-video',
          name: 'Montage video',
        },
      ],
    },
    {
      path: '/a-propos', Component: AProposComponent,
      name: 'A propos'
    },
  ];
  contact = [
    {
      path: '/contact', Component: ContactComponent,
      name: 'Contactez-nous'
    }
  ]

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const options: Partial<M.DropdownOptions> = {
        hover: true,
        coverTrigger: false,
        autoTrigger: true,
        constrainWidth: false,
      };
      const instances = M.Dropdown.init(elems, options);
    });

    document.addEventListener('DOMContentLoaded', function(){
      const elem = document.querySelectorAll('.dropdown-trigger1');
      const sideNavOptions = {
        // Options de configuration pour le SideNav
      };
      const el = document.querySelectorAll('.sideNav')
      const sideNav = M.Sidenav.init(el, sideNavOptions);
      
      const dropdownOptions = {
        hover: false,
        coverTrigger: false,
        autoTrigger: true,
        constrainWidth: false,
      };
      const dropdown = M.Dropdown.init(elem, dropdownOptions);
    });

  
  }

}
