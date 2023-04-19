import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.productService.getUSerName().subscribe((response) =>{
      console.log("response", response);

    })
  }
}

