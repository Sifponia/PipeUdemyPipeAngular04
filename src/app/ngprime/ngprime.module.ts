import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {MenubarModule} from "primeng/menubar";
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,



  ],
  exports: [
    ButtonModule,
    CardModule,
    TabViewModule,
    MenubarModule,
    PanelModule,
    FieldsetModule


  ]
})
export class NgprimeModule {
}
