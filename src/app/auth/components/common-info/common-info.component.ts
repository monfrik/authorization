import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

enum Sex {
  male = 'male',
  female = 'female',
}

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.scss'],
})
export class CommonInfoComponent {

  @Input()
  public formGroup: FormGroup;

  public sex = Sex;

  public constructor() { }

  get emailError(): ValidationErrors {
    return this._getValidationErrorByConrolName('email');
  }

  get passwordError(): ValidationErrors {
    return this._getValidationErrorByConrolName('password');
  }

  get confrimPasswordError(): ValidationErrors {
    return this._getValidationErrorByConrolName('confrimPassword');
  }

  get firstNameError(): ValidationErrors {
    return this._getValidationErrorByConrolName('firstName');
  }

  get lastNameError(): ValidationErrors {
    return this._getValidationErrorByConrolName('lastName');
  }

  get patronymicError(): ValidationErrors {
    return this._getValidationErrorByConrolName('patronymic');
  }

  get sexError(): ValidationErrors {
    return this._getValidationErrorByConrolName('sex');
  }

  get birthdayError(): ValidationErrors {
    return this._getValidationErrorByConrolName('birthday');
  }

  get phoneError(): ValidationErrors {
    return this._getValidationErrorByConrolName('phone');
  }

  get countryError(): ValidationErrors {
    return this._getValidationErrorByConrolName('country');
  }

  get cityError(): ValidationErrors {
    return this._getValidationErrorByConrolName('city');
  }

  get streetError(): ValidationErrors {
    return this._getValidationErrorByConrolName('street');
  }

  get homeError(): ValidationErrors {
    return this._getValidationErrorByConrolName('home');
  }

  get apartmentError(): ValidationErrors {
    return this._getValidationErrorByConrolName('apartment');
  }

  private _getValidationErrorByConrolName(controlName: string): ValidationErrors {
    const control = this.formGroup.get(controlName);
    if (!this.formGroup || !control.invalid || !control.touched) {
      return;
    }
    return control.errors;
  }

}
