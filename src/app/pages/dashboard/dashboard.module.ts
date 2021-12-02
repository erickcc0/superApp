import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from '../../layouts';
import { InretailComponent } from './components/inretail/inretail.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import {
  ResumenComponent,
} from './components/recetas/resumen/resumen.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [
    DashboardComponent,
    ResumenComponent,
    InretailComponent,
    NeosaludComponent
  ],
  imports: [
    DashboardRoutingModule,
    HttpClientModule,
    SidebarModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
  ],
  providers: [],
  // exports: [
  //   UseroptionsComponent
  // ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
