import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@app/auth/services';
import { mustMatch } from '@app/auth/helpers';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public commonInfoForm: FormGroup;
  public billingAddressForm: FormGroup;
  public billingInfoForm: FormGroup;

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public onSubmit(): void {
    if (this.commonInfoForm.valid && this.billingAddressForm.valid && this.billingInfoForm.valid) {
     // register function
    }
  }

  private _initForm(): void {
    this.commonInfoForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confrimPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      patronymic: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      home: ['', [Validators.required]],
      apartment: ['', [Validators.required]],
    }, {
      validator: mustMatch('password', 'confrimPassword'),
    });

    this.billingAddressForm = this._formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      home: ['', [Validators.required]],
      apartment: ['', [Validators.required]],
    });

    this.billingInfoForm = this._formBuilder.group({
      cart: [''],
      fullName: [''],
      validity: [''],
      cvv: [''],
    });
  }

}
