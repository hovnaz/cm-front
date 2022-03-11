import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogedIn: boolean;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
    if (this.authService.currentUserValue) {
      this.isLogedIn = true;
      this.router.navigate(['system']);
    } else {
      this.isLogedIn = false;
    }
  }

  ngOnInit(): void {
  }
}
