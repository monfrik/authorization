import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss'],
})
export class BillingAddressComponent implements OnInit {

  @Input()
  public formGroup: FormGroup;

  public constructor() { }

  public ngOnInit(): void { }

  public onSubmit(): void { }

  public onReset(): void {
    this.formGroup.reset();
  }

}
