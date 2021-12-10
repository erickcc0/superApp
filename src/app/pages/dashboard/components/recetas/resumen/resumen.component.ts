import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor( private _recetasService: RecetasService) { }

  mercado:any[] = [];
  marcas:any[] = [];

  ngOnInit(): void {
    this.getTMercado();
    this.getTMarcas();
  }

  // Tabla Mercado
  getTMercado(){
    this._recetasService.getTMercados()
      .subscribe(resp =>{
        this.mercado = resp;
      },(err)=>{
        console.log(err);
        this.mercado = [];
      });
  }

  // Tabla Marcas
  getTMarcas(){
    this._recetasService.getMarcas()
      .subscribe(resp=>{
        this.marcas = resp;
      },(err)=>{
        console.log(err);
        this.marcas = [];
      });
  
  }
}
