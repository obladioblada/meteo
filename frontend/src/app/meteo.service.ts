import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) {}

  getMeteoForLocation(location: string): Observable<string> {
    return this.http.get<string>('/api/meteo');
  }

}
