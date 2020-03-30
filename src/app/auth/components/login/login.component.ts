import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '@app/auth/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;

  private readonly _destroy$ = new Subject<void>();

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      
      return
    }

    this._authService
      .login(this.loginForm.value)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: () => { },
        error: () => { },
        complete: () => { },
      });
  }

  public onReset(): void {
    this.loginForm.reset();
  }

  private _initForm(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
