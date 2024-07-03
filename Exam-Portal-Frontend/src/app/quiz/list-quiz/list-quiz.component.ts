import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/Model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  quizes:Quiz[]=[]
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {

    this.quizService.getAllQuiz().subscribe(data=>{
      console.log(data)
      this.quizes=data
    })

  }

  deleteCategeory(id:number){
    
  }

}
