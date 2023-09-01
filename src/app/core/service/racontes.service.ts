import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raconte } from '../model/raconte.model';
import { Observable, map } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class raconteService {

  constructor(private http: HttpClient){}
  getAllRaconte(): Observable<any> {
    return this.http
      .get<any>('https://confused-duck-singlet.cyclic.app/api/raconte')
      .pipe(map((value) => value));
  }
  getRaconteById(raconteId: number): Observable<any> {
    return this.http
      .get<any>(
        `https://confused-duck-singlet.cyclic.app/api/raconte/${raconteId}`
      )
      .pipe(map((value) => value));
  }
}
