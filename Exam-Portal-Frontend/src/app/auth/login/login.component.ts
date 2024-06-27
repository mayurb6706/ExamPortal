import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   userLoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
  this.authService.loginUser(this.userLoginForm.value).subscribe({
    next:(data:any)=>{
      console.log(data)
    },error:(err:any)=>console.log(err)
  })
  }
}
