
  import { Component } from '@angular/core';
  import { ServiceService } from '../service/service.service'
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent {
    data:any;
    title:any;
    newData:any;
    responseData:any;
    constructor(private ip:ServiceService) {
      this.ip.getData().subscribe((res: any)=>{
        this.responseData = res;
      })
    }
  ipToLocation(e:any){
    this.data = e;
    console.log(this.data);
  }
  }
