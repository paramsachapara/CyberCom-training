import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Input';
  myText="value from parent component";
  childData:string="";
  myobject=[{
    id:1,
    name:"param"
  },
  {
    id:1,
    name:"param"
},
{
  id:2,
  name:"rutvik"
},
{
  id:3,
  name:"yug"
},
{
  id:4,
  name:"tejas"
}]

getData(value: any){
  console.log(value);
  this.childData=value;
}

}
