import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'ngx-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

  constructor() {}

  items: NbMenuItem[] = [
    {
      title: 'Login',
      link: '/auth',
      icon: 'unlock-outline',
    },
    {
      title: 'Pages',
      link: '/pages',
      icon: 'keypad-outline',
    },
  ];

}
