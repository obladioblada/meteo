import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of } from 'rxjs';
import {MeteoResponse} from "../model/MeteoResponse";

const meteoBaseUrl = 'http://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) {}

  getMeteoForLocation(location: string): Observable<MeteoResponse> {
    return this.http.get<MeteoResponse>(meteoBaseUrl +'/api/meteo', { params: { location: location }})
      .pipe(catchError(this.handleError<MeteoResponse>({} as MeteoResponse)));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
