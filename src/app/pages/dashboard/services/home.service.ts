import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl:string = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/summary/ROJASAL/last_months_results/ANFOSLX?limit=10&page=1&sort=desc';

  constructor( private http: HttpClient ) { 

  }
  ResultLastMont():Observable<any[]>{

    const url= `${this.apiUrl}`;
   return this.http.get<any[]>(url);

  }

}
