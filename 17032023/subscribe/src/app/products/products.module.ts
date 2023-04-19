import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from '../product.service';
import { CustomPipe } from '../core/pipes/custom.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductItemComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers:[ProductService],
  exports:[]
})
export class ProductsModule { }
