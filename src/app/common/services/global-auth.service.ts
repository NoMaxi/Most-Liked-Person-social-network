import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  constructor() {}

  get isLogin(): boolean {
    return !!localStorage.getItem('sn_app_token');
  }

  get token() {
    return localStorage.getItem('sn_app_token') || '';
  }
}
