import { FormGroup, ValidatorFn } from '@angular/forms';


export function mustMatchPasswordValidator(controlName: string): ValidatorFn {
  return (formGroup: FormGroup): {[key: string]: any} | null => {
    const passwordControl = formGroup.get('password');
    if (!passwordControl) {

      return null;
    }

    const control = formGroup.controls[controlName];
    if (control.errors && !control.errors.mustMatchPasswordValidator) {
      
      return;
    }

    if (passwordControl.value !== control.value) {
      control.setErrors({ mustMatch: true });
    } else {
      control.setErrors(null);
    }
  };
}
