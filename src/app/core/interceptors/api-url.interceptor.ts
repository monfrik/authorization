import { Injectable, Injector, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_URL } from '../providers';


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  public constructor(@Inject(API_URL) _apiUrl: any) {
    console.log('1');
    console.log(_apiUrl);
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const paramReq = request.clone({ url: 'http://maksim.kubesh.ru' + request.url });

    return next.handle(paramReq);
  }

}
