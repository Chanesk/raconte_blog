import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itoken } from '../model/Itoken.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://confused-duck-singlet.cyclic.app/api/auth/signup';

  constructor(private http: HttpClient) {}
  signin(credentials: any): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credentials);
  }
}
