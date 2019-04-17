import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@env/environment';
import { GlobalAuthService } from '../../../common/services/global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private globalAuthService: GlobalAuthService
  ) {}

  getNotifications() {
    const headers = new HttpHeaders({ 'x-access-token': this.globalAuthService.token });
    console.log(headers);
    console.log(this.globalAuthService.token);
    return this.http.get(`${this.apiUrl}/public/users/notification`,
      { headers });
  }
}
