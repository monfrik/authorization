import { FormGroup, ValidatorFn } from '@angular/forms';


export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: FormGroup): {[key: string]: any} | null => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
