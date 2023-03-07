import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  title = 'reactive_form';
  loginform = new FormGroup({
    email: new FormControl('paramsachapara29@gmail.com'),
    password: new FormControl('12364789')

  })
  loginUser(){
    console.log(this.loginform.value)
  }
}
