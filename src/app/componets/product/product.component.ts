import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: " ",
    image: ""
  };

  @Output() addedProduct = new EventEmitter <Product>();

  constructor() {}
  ngOnInit(): void {
  }

  agregarCarrito(){
    this.addedProduct.emit(this.product)
  }
}
