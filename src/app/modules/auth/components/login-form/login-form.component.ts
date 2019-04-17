import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';
import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { LoginServerAnswer } from '../../interfaces/LoginServerAnswer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuthService: GlobalAuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    if (this.globalAuthService.isLogin) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.authService.login({ ...this.loginForm.value }).subscribe((res: LoginServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['/']);
      }
    }, (err) => {
      console.log(err);
      // reset password input field if the server returns an error
      this.loginForm.patchValue({ password: '' });

      this.messageService.add({
        severity: 'error',
        summary: 'Login has failed',
        detail: err.error.message,
      });
    });
  }
}
