import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit {

  @Input()
  public formGroup: FormGroup;

  public constructor() { }

  public ngOnInit(): void { }

  public onSubmit(): void { }

  public onReset(): void {
    this.formGroup.reset();
  }

}
