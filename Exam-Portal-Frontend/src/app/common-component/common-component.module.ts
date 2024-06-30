import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    WelcomeComponent

  ]
})
export class CommonComponentModule { }
