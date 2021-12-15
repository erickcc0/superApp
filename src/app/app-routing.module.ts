import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {
  MainDetalleConsultorComponent,
} from './pages/detalle-consultor/main-detalle-consultor/main-detalle-consultor.component';
import { VisitasComponent } from './pages/detalle-consultor/visitas/visitas.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardNavComponent } from './pages/dashboard/components/dashboard-nav/dashboard-nav.component';

/** @type {*} */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'visitas', component: VisitasComponent},
  { path: 'nav', component: DashboardNavComponent},
  { path: ':id/', redirectTo: '', pathMatch: 'full' },
  { path: ':id/dashboard', component: MainDetalleConsultorComponent },
  { path: ':id/detail', component: DashboardComponent, loadChildren: () => import('./pages/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }