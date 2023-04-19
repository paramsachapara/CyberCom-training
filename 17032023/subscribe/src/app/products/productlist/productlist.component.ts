import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  constructor(private productService: ProductService){

  }
  isShow: boolean = true;
  hoverText = "this will be displayed when mouse will hover";
  userName: string ="test";
  numberList = [
    1,2,3,4,5
  ];
  productObject = {
    id:"001",
    title:"product object title"
  };

  products : any  = [
    {
      id:1,
      title:"product 1"
    },
    {
      id:2,
      title:"product 2"
    },
    {
      id:3,
      title:"product 3"
    }
  ]

  onEmmit(event: any){
    console.log("event",event);
    
  }
  onToggle(){
    this.isShow = !this.isShow
  }

  onSave(){
    debugger
    this.productService.throwUserName(this.userName);
  }
  
}
