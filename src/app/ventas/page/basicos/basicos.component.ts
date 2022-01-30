import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  myName: string = 'Oscar Almendares';
  date: Date = new Date();
  fecha: string = 'fecha';

  constructor() {
  }

  ngOnInit(): void {
  }

}
