import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  userForm: FormGroup;
  id: any;
  userList: any;
  updatedData:Body | undefined; // this variable st


  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      userName: ["", Validators.required],
      email:["", [Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      // console.log(this.id);
      if(this.id){
        this.setUserDataById(this.id);
      }

      });
  }
  setUserDataById(id:string){
      this.userService.getUsersById(id).subscribe((responce)=>{

        this.userForm.patchValue({
          userName: responce.userName,
          email:responce.email
        })

      });

  }
  getUserData(){
    this.userService.getUsers().subscribe((responce)=>{
      if(responce && responce.length>0){
        this.userList=responce || []
      }
    })
  }



  submit(){
  if(this.id){
    const formData= this.userForm.getRawValue();
    const body:UserModel={
      userName: formData.userName || "",
      email:formData.email || ""
    }
    this.userService.updateUser(body,this.id).subscribe((responce)=>{
      console.log("responce",responce)
      if(responce){
        this.router.navigate(['/users'])
      }
    })
  }else{
    const formData= this.userForm.getRawValue();
    console.log("forValue",formData);

    const body:UserModel={
      userName: formData.userName || "",
      email:formData.email || ""
    }

    this.userService.postUserData(body).subscribe((responce)=>{
      console.log("responce",responce)
      if(responce){
        this.router.navigate(['/users'])
      }

    },(error) => {
      console.log("error",error);
    }
    )
  }
  };


}
