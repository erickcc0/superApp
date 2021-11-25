import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecetasComponent } from './components/recetas/recetas.component';



@NgModule({
  declarations: [
    RecetasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: []
})
export class DashboardModule { }
