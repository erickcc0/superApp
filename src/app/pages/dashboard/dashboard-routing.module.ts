import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from './components/recetas/resumen/resumen.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import { InretailComponent } from './components/inretail/inretail.component';
import { DetalleInretailComponent } from './components/inretail/detalle-inretail/detalle-inretail.component';

const routes: Routes = [
  { path: 'resumen', component: ResumenComponent},
  { path:'screen2', component:ResumenComponent},
  { path:'screen3', component:NeosaludComponent},
  { path:'screen4', component:InretailComponent},
  { path:'screen5', component:DetalleInretailComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
