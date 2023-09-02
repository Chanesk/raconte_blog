import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itoken } from '../model/Itoken.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = environment.apiUrl

  constructor(private http: HttpClient) {}
  signin(credentials: any): Observable<Itoken> {
    return this.http.post<Itoken>(
      `${this.apiurl}/auth/signup`,
      credentials
    );
  }
}
