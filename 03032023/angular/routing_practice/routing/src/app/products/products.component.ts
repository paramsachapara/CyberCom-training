import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
@Input() productURL='';

constructor(){
  console.log("constructor" ,this.productURL)
};
ngOnInit(): void {
  console.log("ngOnnit" ,this.productURL)
}
}
