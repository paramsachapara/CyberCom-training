import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {
   registration : any = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl(''),
    re_password: new FormControl('')
   
    
   });
   
   doRegistration(){
    let password = this.registration.value.password;
    let repassword = this.registration.value.re_password;
    let email_touch=this.registration.touched;
    console.log(this.registration.invalid);
   }
   
}
