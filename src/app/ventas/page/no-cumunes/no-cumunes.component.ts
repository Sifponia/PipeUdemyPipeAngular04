import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-cumunes',
  templateUrl: './no-cumunes.component.html',
  styleUrls: ['./no-cumunes.component.css']
})
export class NoCumunesComponent implements OnInit {

  name: string = 'Oscar';
  gender: string = 'masculino';

  jsonGenero = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }
  clientes: string [] = ['A', 'B', 'C']


  constructor() {
  }

  //KeyValue Pipe
  persona = {
    name: 'Oscar',
    age: 18,
    domicilio: 'C/ Mentiras'
  }

  ngOnInit(): void {
  }

}
