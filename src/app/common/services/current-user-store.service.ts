import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@env/environment';
import { GlobalAuthService } from './global-auth.service';
import { User } from '../../modules/user/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserStoreService {
  private apiUrl: string = environment.apiUrl;
  private currentUser = {};
  private userWatcherSource: BehaviorSubject<any> = new BehaviorSubject(this.info);
  public userWatcher = this.userWatcherSource.asObservable();

  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService
  ) {}

  public get info() {
    return this.currentUser;
  }

  public set info(user) {
    this.currentUser = { ...user };
    this.userWatcherSource.next({ ...user });
  }

  initCurrentUser() {
    const id = this.globalAuth.userId;
    this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`)
      .subscribe((user: User) => {
        console.log(user);
        if (user._id) {
          this.info = user;
        }
      });
  }
}
