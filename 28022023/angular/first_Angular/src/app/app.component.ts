import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_Angular';
  number = [1,2,3,4,5,6];
  users=[
    {name:"parma",age:21},
    {name:"yug",age:25},
    {name:"rutvik",age:48},
    {name:"tejas", age:59}
  ]
}
