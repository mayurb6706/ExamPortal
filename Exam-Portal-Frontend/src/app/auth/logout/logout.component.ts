import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.logoutUser()
    this.router.navigateByUrl('/login')
  }

}
