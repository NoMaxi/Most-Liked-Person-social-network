import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { GlobalAuthService } from './global-auth.service';
import { CurrentUserStoreService } from './current-user-store.service';
import { User } from '../../modules/user/interfaces/User';
import { UserImages } from '../../modules/user/interfaces/UserImages';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) {}

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: User) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }

  uploadCover(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('coverImg', file);
    const id = this.globalAuth.userId;
    return this.http.post<any>(`${this.apiUrl}/public/users/upload-cover/${id}`, formData);
  }

  getUserImages(id: string): Observable<UserImages> {
    return this.http.get<UserImages>(`${this.apiUrl}/public/users/my-images/${id}`);
  }

  uploadPhotos(files: any[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file: File) => formData.append('userPhotos', file));
    const id = this.globalAuth.userId;
    return this.http.post<any>(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
  }
}
