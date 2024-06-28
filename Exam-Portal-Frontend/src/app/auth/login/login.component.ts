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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  displayStyle: any;
  popupMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authService.loginUser(this.userLoginForm.value).subscribe({
      next: (data: any) => {
        if (data.token != null) {
          //Save the user details
          this.authService.saveUserGeneratedToken(data.token);

          //Get the user Details
          this.authService
            .findUserByUsername(this.userLoginForm.value)
            .subscribe((data) => {
              this.authService.saveUserDetails(data);
            });
          this.popupMessage = 'Login Success!';
        
        }
      },
      error: (err: any) => {
        this.popupMessage = 'Login Failed! Check your credential'
      },
    });
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    if(this.popupMessage==='Login Success!')
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
 
}
