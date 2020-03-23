import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel } from '@app/core/models';

import { IUserFormData } from '../interfaces';


const URL = '/api/auth';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class AuthService {

  constructor(
    private readonly _http: HttpClient,
  ) { }

  public login(userData: IUserFormData): Observable<UserModel> {
    return this._http.post<UserModel>(URL, userData, HTTP_OPTIONS)
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

  public checkUserAuthorization(): Observable<boolean> {
    return of(false);
  }

}
