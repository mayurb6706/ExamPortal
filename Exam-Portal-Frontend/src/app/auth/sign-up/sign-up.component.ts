import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  displayStyle: string;
  popupMessage: string;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router

  ) { }

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

  register() {
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: (user: any) => {
        if (user != null) {
         this.popupMessage="Registeration Success!"
        }
      }, error: (err: any) => {
        this.popupMessage="Registeration Failed!"
      }
    });
  }

  clearInput() {
    this.registerForm.reset()
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    if(this.popupMessage==='Registeration Success!')
    this.navigateToLogin();
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
