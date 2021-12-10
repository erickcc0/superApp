import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private apiUrl: string = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/';

  constructor(private http: HttpClient) {

  }

  getTMercados(): Observable<any[]> {
    let headers = 'consultant/ANDRADC/base_asigna/resultado_base_asigna_m';
    let url = `${this.apiUrl}${headers}`;
    return this.http.get<any[]>(url);

  }

  getMarcas():Observable<any[]>{
    let headers = 'consultant/ANDRADC/base_asigna/resultado_base_asigna_p';
    let url = `${this.apiUrl}${headers}`;
    return this.http.get<any[]>(url);
  }

}
