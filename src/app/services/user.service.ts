import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = '';
  public url1 = '';
  public headers = {'Content-Type': 'application/json'};

  constructor(
    private _http: HttpClient
  ) { 
    this.url = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/profile/1';
    this.url1 = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/summary/ROJASAL/consultant_graphics/ANDRADC';
  }

  getUser(): Observable<any> {
    return this._http 
        .get(this.url, { headers: this.headers})
        .pipe(
          catchError((e) => {
            if(e.status === 404) {
              return throwError(e.error.message);
            }
            console.log(e);
            console.log('Error al traer al usuario');
            return throwError(e);
          })
        );
  }

  getDDD(): Observable<any> {
    return this._http 
        .get(this.url1, { headers: this.headers})
        .pipe(
          catchError((e) => {
            if(e.status === 404) {
              return throwError(e.error.message);
            }
            console.log(e);
            console.log('Error al traer al ddd');
            return throwError(e);
          })
        );
  }
}
