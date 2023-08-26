import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itoken } from '../model/Itoken.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:1337/api/auth/local/register';

  constructor(private http: HttpClient) {}
  signin(credentials: any): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credentials);
  }
}
