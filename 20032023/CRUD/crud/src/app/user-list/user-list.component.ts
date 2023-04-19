import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  id: any;

 constructor(private service:UsersService, private router: Router){}

userList:any=[]

ngOnInit(): void {
 this.getUserData()

}

  getUserData(){
    this.service.getUsers().subscribe((responce:any)=>{
      if(responce && responce.length>0){
        this.userList=responce || []
      }
    })
  }
  doUpdate(id:any){
    this.router.navigate(['users/add',id])
  }
  deleteUser(id:string){
    const indexValue = this.userList.findIndex((x: any)=>{return x.id===id})
    console.log(indexValue);


    this.service.deleteUser(id).subscribe((responce)=>{
      if(responce){
        console.log(`id ${id} successfully deleted`)
        this.userList.splice(indexValue,1)
      }
    })
  }
}
