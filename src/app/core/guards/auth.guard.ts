import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly _router: Router,
  ) {}

  public canActivate(): Observable<boolean> | boolean {
    return this._checkAuthGuard();
  }

  public canActivateChild(): Observable<boolean> | boolean {
    return this._checkAuthGuard();
  }

  private _checkAuthGuard(): Observable<boolean> | boolean {
    const canActivate = true;
    if (!canActivate) {
      this._router.navigate(['/login']);
    }
    return canActivate;
  }

}
