import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Librería DevExtreme*/
import {
  DxButtonModule,
  DxChartModule,
  DxCircularGaugeModule,
  DxDataGridModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavPrincipalComponent } from './shared/nav-principal/nav-principal.component';
import { NavDashboardComponent } from './shared/nav-dashboard/nav-dashboard.component';
import { TableComponent } from './pages/graficos/table/table.component';
import { GraficoshomeComponent } from './pages/graficos/graficoshome/graficoshome.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';
import { MainDetalleConsultorComponent } from './pages/detalle-consultor/main-detalle-consultor/main-detalle-consultor.component';
import { Grafico1Component } from './pages/detalle-consultor/grafico1/grafico1.component';
import { Grafico2Component } from './pages/detalle-consultor/grafico2/grafico2.component';
import { Grafico3Component } from './pages/detalle-consultor/grafico3/grafico3.component';
import { SidebarComponent } from './pages/detalle-consultor/sidebar/sidebar.component';
import { BodyComponent } from './pages/detalle-consultor/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // DashboardComponent,
    // NavPrincipalComponent,
    // NavDashboardComponent,
    TableComponent,
    GraficoshomeComponent,
    MainDetalleConsultorComponent,
    Grafico1Component,
    Grafico2Component,
    Grafico3Component,
    SidebarComponent,
    BodyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxTemplateModule,
    DxDataGridModule,
    DxCircularGaugeModule,
    DxChartModule,
    DxSelectBoxModule
    // DashboardModule,
    // DashboardRoutingModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
