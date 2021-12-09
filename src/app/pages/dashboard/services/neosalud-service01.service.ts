import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { neosalud } from '../interfaces/neosalud.interface';

@Injectable({
  providedIn: 'root'
})
export class NeosaludService01Service {

  private apiUrl:string = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/consultant/ANFOSLX/neosalud/getytd';

  //consultant/ANFOSLX/neosalud/getytd?limit=10

  constructor( private http: HttpClient ) { }

  
  ConsultaNeosaludById():Observable<neosalud[]>{
    const url= `${this.apiUrl}`;
   return this.http.get<neosalud[]>(url);

  }

}
