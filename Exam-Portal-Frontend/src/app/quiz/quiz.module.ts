import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateQuizComponent,
    ListQuizComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CreateQuizComponent,
    ListQuizComponent
  ]
})
export class QuizModule { }
