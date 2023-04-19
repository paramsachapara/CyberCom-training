import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsModule } from './products/products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private userName = new BehaviorSubject<string>("");
  private _userName$ = this.userName.asObservable();
  constructor() { }

  onProductAlert(id: any){
    alert(id);
  }

  throwUserName(userName:string){
    this.userName.next(userName);
  }

  getUSerName(): Observable<string>{
    return this._userName$  ;
  }

}
