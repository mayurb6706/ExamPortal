import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:8080/api/user"
  session: Storage = sessionStorage
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, user)
  }

  loginUser(value: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/auth/login`, value)
  }

  saveUserGeneratedToken(token: string) {
    this.session.setItem('token', token);
  }

  getSavedToken(){
    const token=this.session.getItem('token')
    return token
  }
   findUserByUsername(value: any) {
    console.log(value.username)
   return this.http.get<User>(`${this.authUrl}/username/${value.username}`)
   
  }

  saveUserDetails(data:any){
    this.session.setItem('currentUser',JSON.stringify(data))
  }

  getSavedUserDetails(){
    return JSON.parse(this.session.getItem('currentUser'))
  }
}
