import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HoursJob } from '../models/hours-job';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class HourRequestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  postHours(body: HoursJob): Observable<any> {
    return this.http.post('http://localhost:3000/hours', JSON.stringify(body), httpOptions)
    .pipe(tap(res => console.log('Agregado correctamente')), catchError(this.handleError<any>('postHours')));
  }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
