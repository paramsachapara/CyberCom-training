import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  constructor(private service:ServiceService){
    this.service.username.subscribe(uname=>{
    this.usernameValue=uname;
    })
  };

  usernameValue:string | undefined ;

}
