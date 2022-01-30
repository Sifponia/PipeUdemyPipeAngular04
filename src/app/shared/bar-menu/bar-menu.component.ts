import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  constructor() {
  }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi  pi-eye',
        items: [{
          label: 'Texto y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
          {
            label: 'Números',
            icon: 'pi pi-sort-numeric-up-alt',
            routerLink: '/numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-slack',
            routerLink: '/no-cumunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon:' pi pi-cog'
      }
    ]

  }

}
