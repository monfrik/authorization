import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.scss']
})
export class CommonInfoComponent implements OnInit {

  @Input()
  public formGroup: FormGroup;

  public readonly sexes = [
    'male',
    'female',
  ];

  public constructor() { }

  public ngOnInit(): void { }

  public onSubmit(): void { }

  public onReset(): void {
    this.formGroup.reset();
  }

}
