import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from "@angular/router";

import { Observable } from "rxjs";


export class AuthGuard implements CanActivate, CanActivateChild {

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | boolean {
    return this._checkAuthGuard();
  }
  
  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | boolean {
    return this._checkAuthGuard();
  }

  private _checkAuthGuard(): Observable<boolean> | boolean {
    return false;
  }
}