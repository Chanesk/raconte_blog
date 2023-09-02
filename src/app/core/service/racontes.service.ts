import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class raconteService {
  apiUrl= environment.apiUrl
  constructor(private http: HttpClient){}
  getAllRaconte(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/raconte`)
      .pipe(map((value) => value));
  }
  getRaconteById(raconteId: number): Observable<any> {
    return this.http
      .get<any>(
        `${this.apiUrl}/raconte/${raconteId}`
      )
      .pipe(map((value) => value));
  }
  
  
}
