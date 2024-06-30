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

  getAllCategeory():Observable<any[]>{
    return this.http.get<any[]>(`${this.categeoryUrl}/all`)
  }

  deleteCategeory(id:number):Observable<any>{
    return this.http.delete<any>(`${this.categeoryUrl}/id?id=${id}`)
  }
}
