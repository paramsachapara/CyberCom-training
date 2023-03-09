import{ AbstractControl } from '@angular/forms'

export function passwordValidator(controls:AbstractControl):{[key : string]: boolean} | null{
    const password= controls.get('password');
    const re_password = controls.get('re_password');
    return password && re_password && password.value !== re_password.value? {'mismatch': true}:null;
}