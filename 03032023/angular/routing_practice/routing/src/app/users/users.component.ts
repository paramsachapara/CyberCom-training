import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[]=[
    {name:'param', age:20,id:1},{name:'rutvik', age:200,id:2},{name:'yug', age:21,id:3}
  ]
 
}
