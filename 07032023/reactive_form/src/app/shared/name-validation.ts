import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(controls:AbstractControl):{[key:string]:any}| null{
    const forbidden =/admin/.test(controls.value)
    return forbidden ? {forbiddenNmae: {vlaue: controls.value}} : null;
}