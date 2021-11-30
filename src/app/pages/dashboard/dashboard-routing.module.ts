import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  ResumenComponent,
} from './components/recetas/resumen/resumen.component';
import {
  UseroptionsComponent,
} from './components/useroptions/useroptions.component';

const routes: Routes = [
  { path: '', component: UseroptionsComponent },
  { path: 'resumen', component: ResumenComponent }
];
@NgModule({
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
