import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumerosComponent} from './page/numeros/numeros.component';
import {NoCumunesComponent} from './page/no-cumunes/no-cumunes.component';
import {BasicosComponent} from './page/basicos/basicos.component';
import {OrdenarComponent} from './page/ordenar/ordenar.component';
import {PanelModule} from "primeng/panel";
import {NgprimeModule} from "../ngprime/ngprime.module";


@NgModule({
  declarations: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  exports: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule,

  ]
})
export class VentasModule {
}
