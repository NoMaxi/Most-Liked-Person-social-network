import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { LoginServerAnswer } from '../interfaces/LoginServerAnswer';
import { ResetPasswordServerAnswer } from '../interfaces/ResetPasswordServerAnswer';
import { SignupServerAnswer } from '../interfaces/SignupServerAnswer';
import { SignupInfo } from '../interfaces/SignupInfo';

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  login(cred: object): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${ this.apiUrl }/public/auth/login`, cred)
      .pipe(map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }

  resetPassword(email: string): Observable<ResetPasswordServerAnswer> {
    return this.http.post<ResetPasswordServerAnswer>(`${ this.apiUrl }/public/auth/reset-password`, { email })
      .pipe(map((res: ResetPasswordServerAnswer): ResetPasswordServerAnswer => {
        if (res.error) {
          console.error(res.error);
        }
        return res;
      })
    );
  }

  signup(userData: SignupInfo): Observable<SignupServerAnswer> {
    return this.http.post<SignupServerAnswer>(`${ this.apiUrl }/public/auth/signup`, userData)
      .pipe(map((res: SignupServerAnswer): SignupServerAnswer => {
          if (res.error) {
            console.error(res.error);
          }
          return res;
        })
      );
  }
}
