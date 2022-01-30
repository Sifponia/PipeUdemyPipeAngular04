import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgprimeModule} from "../ngprime/ngprime.module";

import {BarMenuComponent} from "./bar-menu/bar-menu.component";


@NgModule({
  declarations: [
    BarMenuComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule
  ],
  exports: [
    BarMenuComponent

  ]
})
export class SharedModule {
}
