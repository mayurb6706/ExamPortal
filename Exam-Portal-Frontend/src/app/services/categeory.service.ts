import { Categeory } from './../Model/categeory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategeoryService {

  private categeoryUrl="http://localhost:8080/api/categeory"
  constructor(private http:HttpClient) { }

  addNewCategeory(data:any):Observable<any>{
    return this.http.post<any>(`${this.categeoryUrl}/create`,data)
  }
}
