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

  findCategeoryById(cid: number):Observable<any> {
  return this.http.get<any>(`${this.categeoryUrl}/id?id=${cid}`);
  }

  getAllCategeory():Observable<any[]>{
    return this.http.get<any[]>(`${this.categeoryUrl}/all`)
  }

  deleteCategeory(id:number):Observable<any>{
    return this.http.delete<any>(`${this.categeoryUrl}/id?id=${id}`)
  }

  updateCategeory(categeory:Categeory):Observable<any>{
    const cid=categeory.cid
    return this.http.put<any>(`${this.categeoryUrl}/update?id=${cid}`,categeory)
  }
}
