import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalAuthService } from './common/services/global-auth.service';
import { CurrentUserStoreService } from './common/services/current-user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingRouteConfig: Observable<boolean>;

  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.globalAuth.token) {
      this.currentUser.initCurrentUser();
    }
    this.loadingRouteConfig = this.router.events
      .pipe(map((event) => event instanceof RouteConfigLoadStart));
  }
}
