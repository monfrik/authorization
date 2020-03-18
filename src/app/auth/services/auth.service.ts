import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

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
    return this._http.post<UserModel>(URL + 'login', userData, HTTP_OPTIONS)
      .pipe(
        tap((response: any) => {
          if (response.status) {
            this._saveTokens(response.tokens);
          }
        })
      );
  }

  private _saveTokens(tokens: { access_token: string, refrash_token:string }): void {
    for(const token in tokens) {
      localStorage.setItem(token, tokens[token]);
    }
  }
}
