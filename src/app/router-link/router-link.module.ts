import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BasicosComponent} from '../ventas/page/basicos/basicos.component';
import {NumerosComponent} from "../ventas/page/numeros/numeros.component";
import {NoCumunesComponent} from '../ventas/page/no-cumunes/no-cumunes.component';
import {OrdenarComponent} from "../ventas/page/ordenar/ordenar.component";
import {VentasModule} from "../ventas/ventas.module";

const routes: Routes = [
  {path: '', component: BasicosComponent, pathMatch: 'full'},
  {path: 'numeros', component: NumerosComponent},
  {path: 'no-cumunes', component: NoCumunesComponent},
  {path: 'ordenar', component: OrdenarComponent},
  {path: '**', redirectTo: ''}//sI NO HAY NADA REdireccioona a {path: '', component:BasicosComponent, pathMatch: 'full'},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class RouterLinkModule {
}
