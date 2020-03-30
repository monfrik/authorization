import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss'],
})
export class BillingAddressComponent {

  @Input()
  public formGroup: FormGroup;

  public constructor() { }

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
