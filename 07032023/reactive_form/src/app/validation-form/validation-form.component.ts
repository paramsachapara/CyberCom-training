import { Component } from '@angular/core';
import{FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'
import { forbiddenNameValidator } from '../shared/name-validation';
import { passwordValidator } from '../shared/password-validator';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {
  get email(){
    return this.registration.get['email'];
    
  }

  constructor(private fb:FormBuilder){}
  registration : any= this.fb.group({
    email: ['',[Validators.required]],
    password: [''],
    re_password: [''],
    address : this.fb.group({
      city: [''],
      state:[''],
      postal_code: ['']
    })
  });
  
  //  registration : any = new FormGroup({
    //   email: new FormControl('',Validators.required),
  //   password: new FormControl(''),
  //   re_password: new FormControl(''),
  //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     postal_code: new FormControl(''),
    
    
    //   })
    
    //  });
    
    doRegistration(){
    // console.log(this.registration.controls); 
    let password = this.registration.value.password;
    let repassword = this.registration.value.re_password;
    let email_touch=this.registration.touched;
    // console.log(this.registration.mismatch);

   }
}
