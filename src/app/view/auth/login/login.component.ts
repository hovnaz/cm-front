import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '@models/responseData';
import { Login } from '@models/login';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;

  errors!: {
    username: string,
    password: string
  };

  constructor(
    public authService: AuthService,
    private router: Router
  ) 
  {
    this.loginForm = new FormGroup({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  submitForm(): void{
    this.loading = true;
    const values = this.loginForm.getRawValue();
    this.authService.login(values)
    .subscribe((response: ResponseI<Login>) => {
      if (response.success === true){
        this.router.navigate(['system']);
      }
    }, (err) => {
      this.errors = err.error.errors;
      this.loading = false;
    });
  }

}
