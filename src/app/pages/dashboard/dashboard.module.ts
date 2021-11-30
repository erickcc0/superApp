import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { InretailComponent } from './components/inretail/inretail.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import {
  ResumenComponent,
} from './components/recetas/resumen/resumen.component';
import {
  UseroptionsComponent,
} from './components/useroptions/useroptions.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ResumenComponent,
    InretailComponent,
    NeosaludComponent,
    UseroptionsComponent
  ],
  imports: [
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [],
  // exports: [
  //   UseroptionsComponent
  // ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
