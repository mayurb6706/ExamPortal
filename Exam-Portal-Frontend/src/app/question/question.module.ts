import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateQuestionComponent,
    ListQuestionComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    CreateQuestionComponent,
    ListQuestionComponent
  ]
})
export class QuestionModule { }
