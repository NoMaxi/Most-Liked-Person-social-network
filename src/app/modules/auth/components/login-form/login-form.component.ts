import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';
import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
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
    private messageService: MessageService,
    private currentUser: CurrentUserStoreService
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
        this.currentUser.initCurrentUser();
        this.router.navigate(['/']);

        this.messageService.add({
          severity: 'success',
          summary: 'Login success',
          detail: 'You have successfully logged in'
        });
      }
    }, (err) => {
      console.error(err);
      this.loginForm.patchValue({ password: '' });

      this.messageService.add({
        severity: 'error',
        summary: 'Login fail',
        detail: err.error.message,
      });
    });
  }
}
