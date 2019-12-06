import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { GlobalAuthService } from '../../../common/services/global-auth.service';
import { Notification } from '../interfaces/Notification';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private globalAuthService: GlobalAuthService
  ) {}

  getNotifications(): Observable<Notification[]> {
    const headers = new HttpHeaders({
      'x-access-token': this.globalAuthService.token
    });
    return this.http.get<Notification[]>(`${ this.apiUrl }/public/users/notification`, { headers });
  }
}
