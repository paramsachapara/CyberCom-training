import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router){
    this.initializeForm();
  }
   initializeForm(){
    this.loginForm = this.formBuilder.group({
      email:["abc@gmail.com",Validators.required],
      password:["", Validators.required]
    })
  }

  get _form(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.formSubmitted = true;
    console.log("this.loginForm",this.loginForm);
    const formValue = this.loginForm.getRawValue();
    console.log("formValue",formValue);
    // 
    const user = {
      token : "zexcvbn",
      isAdmin: true
    }

    localStorage.setItem("user",JSON.stringify(user))
    this.router.navigate(['/users'])
    
  }
}
