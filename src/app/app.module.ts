import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/*Librería DevExtreme*/ 
import { DxButtonModule } from 'devextreme-angular';
import { DxTemplateModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxCircularGaugeModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavPrincipalComponent } from './shared/nav-principal/nav-principal.component';
import { NavDashboardComponent } from './shared/nav-dashboard/nav-dashboard.component';
import { TableComponent } from './pages/graficos/table/table.component';
import { GraficoshomeComponent } from './pages/graficos/graficoshome/graficoshome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavPrincipalComponent,
    NavDashboardComponent,
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
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
