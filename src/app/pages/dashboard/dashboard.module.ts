import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResumenComponent } from './components/recetas/resumen/resumen.component';
import { InretailComponent } from './components/inretail/inretail.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import { UseroptionsComponent } from './components/useroptions/useroptions.component';
import { PerfilComponent } from './components/recetas/perfil/perfil.component';
import { PerfilDetalleComponent } from './components/recetas/perfil-detalle/perfil-detalle.component';

@NgModule({
  declarations: [
    ResumenComponent,
    InretailComponent,
    NeosaludComponent,
    UseroptionsComponent,
    ResumenComponent,
    PerfilComponent,
    PerfilDetalleComponent
       
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    PerfilComponent,
    UseroptionsComponent,
    ResumenComponent,
    PerfilDetalleComponent
  ]
})
export class DashboardModule { }
