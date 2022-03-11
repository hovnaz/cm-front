import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseI } from '@models/responseData';
import { Login } from '@models/login';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  loading = false;
  isShowPopup = false; 
  resetPasswordForm: FormGroup;
  errors!: {
    email: string,
  };

  constructor( public authService: AuthService )
  {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl ('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void{
    this.loading = true;
    const values = this.resetPasswordForm.getRawValue();
    this.authService.resetPassword(values)
    .subscribe((response: ResponseI<[]>): void => {
      if (response.success === true){
        this.isShowPopup = true;
      }
    }, (err) => {
      this.errors = err.error.errors;
      this.loading = false;
    });
  }

  closePopup(): void{
    this.isShowPopup = false;
  }
}
