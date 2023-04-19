import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
constructor(private service:ServiceService){
  this.service.username.subscribe(uname=>{
    this.usernameValue=uname;
  })
};

usernameValue:any;
}
