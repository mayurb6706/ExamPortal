import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:8080/api/user"
  constructor(private http: HttpClient) { }

  registerUser(user: User):Observable<any> {
  return this.http.post<any>(`${this.authUrl}/register`,user)
  }

  loginUser(value:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/auth/login`,value)
  }
}
