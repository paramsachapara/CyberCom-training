import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder, private auth: AuthService,private router: Router){}
  login: any = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

test(){
  let enteredEmail:String=this.login.get('email').value;
  let enteredPassword : String = this.login.get('password').value;
  if(enteredEmail=="paramsachapara29@gmail.com" && enteredPassword=="param"){
    localStorage.setItem('token', "tokentokentoken")
    if(localStorage.getItem('token')){
      this.router.navigate(['/dashboard'])
    }
  }

}
get email(){
  return this.login.get('email');
}
get password(){
  return this.login.get('password');
}
}
