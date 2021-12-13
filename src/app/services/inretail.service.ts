import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class InretailService {

  public url = ''
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  getDistritos(): Observable<any> {
    return this._http
        .get(this.url + 'consultant/OJEDAAX3/inretail/getdistritossoles', {headers: this.headers})
        .pipe(
          catchError((e) => {
            if(e.status === 404) {
              return throwError(e.status.error);
            }
            console.log(e);
            console.log('Error al traer Ditritos');
            return throwError(e);
          })
        );
  }

  getMarcas(): Observable<any> {
    return this._http
      .get(this.url + 'consultant/ANDRADC/inretail/getmarcassoles', {headers: this.headers})
      .pipe(
        catchError((e) => {
          if(e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer las Marcas')
          return throwError(e);
        })
      );
  }

  getMercados(): Observable<any> {
    return this._http
      .get(this.url  + 'consultant/OJEDAAX3/ddd/getresumenmercados', {headers: this.headers})
      .pipe(
        catchError((e) => {
          if(e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer los Mercados');
          return throwError(e);
        })
      );
  }

 
  getTendenciaGeneral(): Observable<any> {
    return this._http
      .get(this.url  + 'consultant/ANDRADC/inretail/gettendenciageneral', {headers: this.headers})
      .pipe(
        catchError((e) => {
          if(e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer los Tendencia General');
          return throwError(e);
        })
      );
  }
}