import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  userId: any;
  constructor(private route:ActivatedRoute){
  
    this.userId = this.route.snapshot.params["id"];
    console.log("this.userId",this.userId)
  }
}
