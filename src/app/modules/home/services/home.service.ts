import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { HomePageData } from '../interfaces/HomePageData';
import { ChallengeData } from '../interfaces/ChallengeData';

@Injectable()
export class HomeService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getHomePage(): Observable<HomePageData> {
    return this.http.get<HomePageData>(`${this.apiUrl}/public/home`);
  }

  getActiveChallenges(): Observable<ChallengeData[]> {
    let params = new HttpParams();
    params = params.append('isActive', '0')
      .append('isClosed', '1')
      .append('limit', '6');
    const httpOptions = {
      params
    };
    return this.http.get<ChallengeData[]>(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
