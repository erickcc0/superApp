import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { TableComponent } from './pages/graficos/table/table.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'table', component: TableComponent},
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)} // lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
