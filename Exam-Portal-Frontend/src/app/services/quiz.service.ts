import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../Model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  private quizUrl="http://localhost:8080/api/quiz"

  constructor(private http:HttpClient) { }

  createQuiz(quiz:Quiz):Observable<any> {
  return this.http.post<any>(`${this.quizUrl}/create`,quiz);
  }

  getAllQuiz():Observable<any[]> {
    return this.http.get<any[]>(`${this.quizUrl}/all`)
   }
  
}
