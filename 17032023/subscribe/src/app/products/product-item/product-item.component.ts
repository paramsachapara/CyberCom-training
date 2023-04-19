import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  

  @Input() productItem: any;
  @Output() myEventEmmiter: EventEmitter<any> = new EventEmitter();
  
  constructor(private productService: ProductService) {  
    console.log('Constructor Called');  
   }  
  
  ngOnInit() {  
    console.log('ngOnInit Called');  
  }  
  
  // ngOnChanges(){  
  //   console.log('ngOnChanges Called');  
  // }  
  
  // ngDoCheck(){  
  //   console.log('ngOnDoCheck Called');  
  // }  
  
  // ngAfterContentInit(){  
  //   console.log('ngAfterContentInit Called');  
  // }  
  
  // ngAfterContentChecked(){  
  //   console.log('ngAfterContentChecked Called');  
  // }  
  
  // ngAfterViewInit(){  
  //   console.log('ngAfterViewInit Called');  
  // }  
  
  // ngAfterViewChecked(){  
  //   console.log('ngAfterViewChecked Called');  
  // }  
  
  // ngOnDestroy(){  
  //   debugger
  //   console.log('ngOnDestroy Called');  
  // }  

  onEmitData(){
    this.myEventEmmiter.emit({
      id: " product id is"+this.productItem.id || "",
      title:"Product title is "+ this.productItem.title || ""
    });
  }

  alertData(){
    this.productService.onProductAlert(this.productItem.id)
  }
  

}
