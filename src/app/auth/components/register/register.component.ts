import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    this._formInit();
  }

  public onSubmit(): void {
    
  }

  private _formInit(): void {
    this.commonInfoForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      patronymic: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      home: ['', [Validators.required]],
      apartment: ['', [Validators.required]],
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
      fullname: [''],
      validity: [''],
      cvv: [''],
    });
  }

}
