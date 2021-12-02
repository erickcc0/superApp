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
// import {
//   DashboardRoutingModule,
// } from './pages/dashboard/dashboard-routing.module';
// import { DashboardModule } from './pages/dashboard/dashboard.module';
import {
  GraficoshomeComponent,
} from './pages/graficos/graficoshome/graficoshome.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { NavPrincipalComponent } from './shared/nav-principal/nav-principal.component';
// import { NavDashboardComponent } from './shared/nav-dashboard/nav-dashboard.component';
import { TableComponent } from './pages/graficos/table/table.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // DashboardComponent,
    // NavPrincipalComponent,
    // NavDashboardComponent,
    TableComponent,
    GraficoshomeComponent
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
    DxSelectBoxModule,
    // DashboardModule,
    // DashboardRoutingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
