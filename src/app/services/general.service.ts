import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url_base = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/';
  public headers = { headers: { 'Content-Type': 'application/json' }};

  constructor(
    private http: HttpClient
  ) {
  }

  functionForError(e: any, errorText: string) {
    if (e.status === 404) {
      alert(errorText + ': ' + e.error.message);
      return throwError(e.error.message);
    }
    console.log(e);
    console.log(errorText);
    return throwError(e);
  }

  getProfile(): Observable<any> {
    return this.http
      .get(this.url_base + 'profile/1', this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getProfile')
        })
      );
  }

  getSummary(): Observable<any> {
    return this.http
      .get(this.url_base + 'summary/general/1', this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getSummary')
        })
      );
  }

  getResultsLastMonth(): Observable<any> {
    return this.http
      .get(this.url_base + 'summary/ROJASAL/last_months_results/ANDRADC?limit=10&page=1&sort=desc', this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getResultsLastMonth')
        })
      );
  }
}
