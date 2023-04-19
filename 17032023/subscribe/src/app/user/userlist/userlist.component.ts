import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{
  constructor(private productService: ProductService){
    
  }
  ngOnInit(): void {
    this.productService.onProductAlert(1);
  }

}
