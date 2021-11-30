import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRouting } from './pages.routing';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    PagesRouting,
    HttpClientModule
  ],
  providers: [],
  // exports: [
  //   UseroptionsComponent
  // ],
})

export class PagesModule { }
