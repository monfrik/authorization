import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  public constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST') {
      const paramReq = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
      return next.handle(paramReq);
    }
    return next.handle(request);
  }

}
