import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  private shopingList: Product[]  = [];
  total = 0;
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  addProduct(product : Product){
    this.shopingList.push(product);
    this.myCart.next(this.shopingList);
  }

  getShopingList() {
    return this.shopingList;
  }

  getTotal(){
    return this.total= this.shopingList.reduce((sum, item) => sum + item.price, 0);
  }
}
