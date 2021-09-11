import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    faCompressAlt,
    faCopy,
    faFile,
    faHandshake,
    faIdCard,
    faPowerOff,
    faServer,
    faShareSquare,
    faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import * as menuJson from 'src/assets/menu/menu.json';
import { MatSidenav } from '@angular/material/sidenav';

import { Menu } from './MenuModel';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']

})

export class MenuComponent {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    menu: Menu[] = menuJson.stavke;
    isMenuOpen = false;
    contentMargin = 240;

    duzina: number = this.menu.length;
    ikone: Object = {
        faCompressAlt: faCompressAlt,
        faCopy: faCopy,
        faFile: faFile,
        faHandshake: faHandshake,
        faIdCard: faIdCard,
        faPowerOff: faPowerOff,
        faServer: faServer,
        faShareSquare: faShareSquare,
        faUserCog: faUserCog
    };

    constructor(private router: Router) { }

    redirect() {
        this.router.navigate(['/']);
    }

    onToolbarMenuToggle() {
        this.isMenuOpen = !this.isMenuOpen;
    
      //  console.log('On toolbar toggled', this.isMenuOpen);

        if(!this.isMenuOpen) {
          this.contentMargin = 10;
          if(!this.sidenav.opened){
              this.sidenav.open();
          }
        } else {
          this.contentMargin = 150;
          this.sidenav.open();
        }
        //this.sidenav.toggle();
      }

}