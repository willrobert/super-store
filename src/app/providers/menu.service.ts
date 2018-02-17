import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class MenuService {

  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    }
  ]

  constructor() { }
  open() {
    this.opened = true;
    // setTimeout(()=> {
    // this.fix();
    //})
  }

  close() {
    this.opened = false;
  }

  fix() {
    if(document.body.scrollTop > 65) {
      $('selection.outer').addClass('margin-fix');
    } else {
      $('selection.outer').removeClass('margin-fix');
    }
  }
}
