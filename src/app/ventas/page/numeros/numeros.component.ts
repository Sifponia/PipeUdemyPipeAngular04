import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  pi: number = Math.PI;
  Porcentaje: number = 0.55;
  numero: number = 121323454546546;


  constructor() {
  }

  ngOnInit(): void {

  }

}
