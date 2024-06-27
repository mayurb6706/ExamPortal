import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService

  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    });
  }

  register(){
    this.authService.registerUser(this.registerForm.value).subscribe({
      next:(user:any)=>{
        console.log(user)
      }, error:(err:any)=>console.log(err)
    });
  }

  clearInput(){
    this.registerForm.reset()
  }
}
