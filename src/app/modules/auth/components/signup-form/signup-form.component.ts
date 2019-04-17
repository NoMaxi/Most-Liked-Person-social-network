import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';
import { SignupInfo } from '../../interfaces/SignupInfo';
import { SignupServerAnswer } from '../../interfaces/SignupServerAnswer';
import { passwordEqualForInput } from '@helpers/validators';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  genders: string[] = ['male', 'female'];
  minBirthDate = new Date(1950, 0, 1);
  maxBirthDate = new Date();

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(\\d{10}|\\+?\\d{12})$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        passwordEqualForInput
      ]),
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return console.log('Validation error');
    }

    const formValue = this.signUpForm.value;
    const userData: SignupInfo = {
      email: formValue.email,
      password: formValue.password,
      nickname: formValue.nickname,
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      phone: formValue.phone,
      gender_orientation: formValue.gender,
      city: formValue.city,
      country: formValue.country,
      date_of_birth_day: formValue.birthDate.getDate(),
      date_of_birth_month: formValue.birthDate.getMonth() + 1,
      date_of_birth_year: formValue.birthDate.getFullYear()
    };

    // another solutions: using the spread operator or Object.assign() method and
    // not creating the separate userData variable - if the signUpForm was created
    // with the same field names as the SignupInfo interface, but the camelCase
    // style won't be sustained; so I decided to create the userData variable (^_^)
    this.authService.signup(userData).subscribe((res: SignupServerAnswer) => {
      console.log(res);
      if (!res.error) {
        this.router.navigate(['/auth/login']);
      }
    }, (err) => {
      console.error(err);

      this.messageService.add({
        severity: 'error',
        summary: 'Signup has failed',
        detail: err.error.message,
      });
    });
  }
}
