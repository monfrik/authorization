import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent {

  @Input()
  public formGroup: FormGroup;

  public constructor() { }

  get cartControl(): AbstractControl {
    return this.formGroup.get('cart');
  }

  get fullNameControl(): AbstractControl {
    return this.formGroup.get('fullName');
  }

  get validityControl(): AbstractControl {
    return this.formGroup.get('validity');
  }

  get cvvControl(): AbstractControl {
    return this.formGroup.get('cvv');
  }

}
