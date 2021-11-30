import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from './components/recetas/resumen/resumen.component';

const routes: Routes = [
  { path: 'resumen', component: ResumenComponent}
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
