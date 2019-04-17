import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { GlobalAuthService } from '../common/services/global-auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private globalAuth: GlobalAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-access-token': `${ this.globalAuth.token }`
      }
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
