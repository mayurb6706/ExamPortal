import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './common-component/home/home.component';
import { ContactUsComponent } from './common-component/contact-us/contact-us.component';
import { AboutUsComponent } from './common-component/about-us/about-us.component';
import { CreateCategeoryComponent } from './categeory/create-categeory/create-categeory.component';
import { ProfileComponent } from './User/profile/profile.component';
import { ListCategeoryComponent } from './categeory/list-categeory/list-categeory.component';
import { WelcomeComponent } from './common-component/welcome/welcome.component';
import { UpdateCategeoryComponent } from './categeory/update-categeory/update-categeory.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import { CreateQuestionComponent } from './question/create-question/create-question.component';
import { ListQuestionComponent } from './question/list-question/list-question.component';


const routes: Routes = [
  {path:'create-question', component:CreateQuestionComponent},
  {path:'all-question', component:ListQuestionComponent},
  {path:'create-quiz',component:CreateQuizComponent},
  {path:'all-quiz',component:ListQuizComponent},
  {path:'update/:id',component:UpdateCategeoryComponent},
  {path:'all-categeory',component:ListCategeoryComponent},
  {path:'create-categeory',component:CreateCategeoryComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'logout', component:LogoutComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'welcome',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
