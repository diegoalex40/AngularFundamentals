import { Component } from '@angular/core';
import { Product} from '../../models/product.model'
import {StoreService} from '../../services/store.service'
import { ProductService } from '../../services/product.service'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  shopingList: Product[]  = [];
  total = 0;
  products: Product[] = [];
  date = new Date(2021, 1, 1);
  today = new Date();

  constructor(
    private storeService: StoreService,
    private productService : ProductService

  ) {
    this.shopingList = this.storeService.getShopingList();
  }

  ngOnInit(): void{
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    }
    )
  }

  onAddToShoppingList(product : Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
