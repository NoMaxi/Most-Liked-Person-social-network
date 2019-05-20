import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { GlobalAuthService } from './global-auth.service';
import { CurrentUserStoreService } from './current-user-store.service';
import { User } from '../../modules/user/interfaces/User';
import { UserImages } from '../../modules/user/interfaces/UserImages';
import { UserGlories } from '../../modules/user/interfaces/UserGlories';
import { UserFavourites } from '../../modules/user/interfaces/UserFavourites';
import { UserFollowers } from '../../modules/user/interfaces/UserFollowers';
import { UserFollowServerAnswer } from '../../modules/user/interfaces/UserFollowServerAnswer';
import { Winners } from '../../modules/winners/interfaces/Winners';
import { News } from '../../modules/news/interfaces/News';

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
    const params = new HttpParams()
      .set('page', '1')
      .set('count', '30');
    return this.http.get<UserImages>(`${this.apiUrl}/public/users/my-images/${id}`, { params });
  }

  uploadPhotos(files: any[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file: File) => formData.append('userPhotos', file));
    const id = this.globalAuth.userId;
    return this.http.post<any>(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
  }

  getUserGlories(id: string): Observable<UserGlories> {
    const params = new HttpParams()
      .set('page', '1')
      .set('count', '15');
    return this.http.get<UserGlories>(`${this.apiUrl}/public/users/glories/${id}`, { params });
  }

  getUserFavourites(id: string): Observable<UserFavourites> {
    const params = new HttpParams()
      .set('page', '1')
      .set('count', '30');
    return this.http.get<UserFavourites>(`${this.apiUrl}/public/users/my-favorites/${id}`,
      { params });
  }

  getUserFollowers(id: string): Observable<UserFollowers> {
    const params = new HttpParams()
      .set('page', '1')
      .set('count', '30')
      .set('path', 'followings');
    return this.http.get<UserFollowers>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, { params });
  }

  getUserFollowings(id: string): Observable<UserFollowers> {
    const params = new HttpParams()
      .set('page', '1')
      .set('count', '30')
      .set('path', 'followers');
    return this.http.get<UserFollowers>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, { params });
  }

  userFollowToggle(id: string): Observable<UserFollowServerAnswer> {
    return this.http.put<UserFollowServerAnswer>(`${this.apiUrl}/public/users/following/${id}`, {});
  }

  getWinners(part: number = 1, limit: number = 0): Observable<Winners> {
    const params = new HttpParams()
      .set('page', `${part}`)
      .set('count', `${limit}`);
    return this.http.get<Winners>(`${this.apiUrl}/public/winners`, { params });
  }

  getNews(page: number = 1, count: number = 0): Observable<News> {
    const params = new HttpParams()
      .set('page', `${page}`)
      .set('count', `${count}`);
    return this.http.get<News>(`${this.apiUrl}/public/news`, { params });
  }
}
