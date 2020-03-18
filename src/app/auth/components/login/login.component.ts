import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this._formInit();
  }

  public onSubmit(): void {
    this._authService
      .login(this.loginForm.value)
      .subscribe({
        next: () => {},
        error: () => {},
        complete: () => {},
      });
  }

  private _formInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
