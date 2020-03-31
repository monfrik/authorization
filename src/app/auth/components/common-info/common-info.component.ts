import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';


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

  get emailControl(): AbstractControl {
    return this.formGroup.get('email');
  }

  get passwordControl(): AbstractControl {
    return this.formGroup.get('password');
  }

  get confirmPasswordControl(): AbstractControl {
    return this.formGroup.get('confirmPassword');
  }

  get firstNameControl(): AbstractControl {
    return this.formGroup.get('firstName');
  }

  get lastNameControl(): AbstractControl {
    return this.formGroup.get('lastName');
  }

  get patronymicControl(): AbstractControl {
    return this.formGroup.get('patronymic');
  }

  get sexControl(): AbstractControl {
    return this.formGroup.get('sex');
  }

  get birthdayControl(): AbstractControl {
    return this.formGroup.get('birthday');
  }

  get phoneControl(): AbstractControl {
    return this.formGroup.get('phone');
  }

  get countryControl(): AbstractControl {
    return this.formGroup.get('country');
  }

  get cityControl(): AbstractControl {
    return this.formGroup.get('city');
  }

  get streetControl(): AbstractControl {
    return this.formGroup.get('street');
  }

  get homeControl(): AbstractControl {
    return this.formGroup.get('home');
  }

  get apartmentControl(): AbstractControl {
    return this.formGroup.get('apartment');
  }

}
