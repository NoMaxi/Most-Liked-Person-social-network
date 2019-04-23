import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { GlobalAuthService } from '../../../../commonServices/global-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuthService: GlobalAuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    if (this.globalAuthService.isLogin) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.authService.login({ ...this.loginForm.value }).subscribe((res) => {
      this.router.navigate(['/']);
    }, (err) => {
      // reset password input field if the server returns an error
      this.loginForm.patchValue({ password: '' });
    });
  }
}
