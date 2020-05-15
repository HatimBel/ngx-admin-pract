import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TrafficList} from '../data/traffic-list';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'http://localhost:3000/';

  public getTraffic(period: String): Observable<TrafficList[]>{
    const ur = this.API_URL + period;
    return this.http.get<TrafficList[]>(ur).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<TrafficList[]>('getTraffic', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    // tslint:disable-next-line:no-console
    console.log(`API Service: ${message}`);
  }


  constructor(private http: HttpClient) { }
}
