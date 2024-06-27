import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent
  ]
})
export class CommonComponentModule { }
