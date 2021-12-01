import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/graficos/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { MainDetalleConsultorComponent } from './pages/detalle-consultor/main-detalle-consultor/main-detalle-consultor.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'table', component: TableComponent},
  { path:'detalle', component:MainDetalleConsultorComponent},
  { 
    path: 'dashboard', 
    loadChildren: () => 
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
