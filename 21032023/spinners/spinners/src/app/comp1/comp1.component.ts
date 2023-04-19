import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private service:ServiceService){}

  // apidata:any=this.getapidata();

  // getapidata(){
  //    this.service.getdata().subscribe((responce)=>{
  //     console.log(responce);
  //     return responce;

  //   })
  // }
}
