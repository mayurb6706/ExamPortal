import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthorizationService } from './services/authorization.service';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from './common-component/common-component.module';
import { CategeoryModule } from './categeory/categeory.module';
import { UserModule } from './User/user.module';
import { QuizModule } from './quiz/quiz.module';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizationService, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule,
        UserModule,
        CommonModule,
        CommonComponentModule,
        CategeoryModule,
        QuizModule
    ]
})
export class AppModule { }


