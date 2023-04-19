import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private service:ServiceService){
    this.service.username.subscribe(uname=>{
      this.usernameValue=uname;
    })
  }

  change(username: { value: string; }){
     this.service.username.next(username.value);
  }
  usernameValue:any
}
