import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor( private _RecetasService:RecetasService) { }

  marcas:any[] = [];

  ngOnInit(): void {
    this.GetMarcas();
  }

  GetMarcas(){
    this._RecetasService.getMarcas()
      .subscribe(resp =>{
        this.marcas = resp;
        console.log(this.marcas);
      },(err)=>{
        console.log(err);
        this.marcas = [];
      });
  }

}
