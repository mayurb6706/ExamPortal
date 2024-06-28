import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategeoryComponent } from './create-categeory/create-categeory.component';
import { ListCategeoryComponent } from './list-categeory/list-categeory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateCategeoryComponent,
    ListCategeoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CreateCategeoryComponent,
    ListCategeoryComponent
  ]
})
export class CategeoryModule { }
