import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly _router: Router,
  ) {}

  public canActivate(): Observable<boolean> | boolean | UrlTree {
    return this._checkAuthGuard();
  }

  public canActivateChild(): Observable<boolean> | boolean | UrlTree {
    return this._checkAuthGuard();
  }

  private _checkAuthGuard(): Observable<boolean> | boolean | UrlTree {
    const canActivate = false;
    if (!canActivate) {
      const url = '/auth/login';
      const tree: UrlTree = this._router.parseUrl(url);
      return tree;
    }
    return canActivate;
  }

}
