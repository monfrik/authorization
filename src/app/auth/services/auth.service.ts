import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUser } from '@app/core/interfaces';

import { IUserLoginData } from '../interfaces';


@Injectable()
export class AuthService {

  private readonly _url = '/api/auth';

  constructor(
    private readonly _http: HttpClient,
  ) { }

  public login(userData: IUserLoginData): Observable<IUser> {
    return this._http.post<IUser>(this._url, userData)
      .pipe(
        tap((response: any) => {
          if (response.status) {
            // status valid
            return;
          }
          // status invalid;
        }),
      );
  }

}
