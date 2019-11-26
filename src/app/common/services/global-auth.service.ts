import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {}

  public get isLogin(): boolean {
    return !!localStorage.getItem('sn_app_token');
  }

  public get token(): string {
    return localStorage.getItem('sn_app_token') || '';
  }

  public get userId() {
    return this.token ? this.jwtHelper.decodeToken(this.token).id : null;
  }
}
