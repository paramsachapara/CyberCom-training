import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiData';
  user:any;
  loggedIn:any;
  location:any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

    });
  }
  ipToLocation(e:any){
    this.location=e;
    console.log(this.location);
  }
  newdata:any;
  
}
