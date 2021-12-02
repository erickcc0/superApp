import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = '';
  public headers = {'Content-Type': 'application/json', 'Transfer-Encoding': 'chunked'};

  constructor(
    private _http: HttpClient
  ) { 
    this.url = 'https://2rx6x29k36.execute-api.us-east-1.amazonaws.com/profile/1';
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
}
