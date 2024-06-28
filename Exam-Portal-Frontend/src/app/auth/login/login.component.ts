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
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

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
        this.authService.saveUserGeneratedToken(data.token)

        //Get the user Details
        this.authService.findUserByUsername(this.userLoginForm.value).subscribe(data=>{
          console.log(data)
          this.authService.saveUserDetails(data)
        })

          this.route.navigateByUrl('/welcome-home')
        }
      }, error: (err: any) => {
        alert("Login Failed! Check your credential.")
      }
    })
  }
}
