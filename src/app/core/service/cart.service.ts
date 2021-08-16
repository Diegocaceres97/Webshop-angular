import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable(); //Variable publica

  
  constructor() { }

  addCart(product: Product){
    if(this.products.length===0){
      this.products = [...this.products, product]; //inmutabilidad
      this.cart.next(this.products);
    }
    console.log(this.products)
    this.products.forEach(item=> {
      
      if(this.products.includes(product) === false){
        if(item.id !== product.id){
          this.products = [...this.products, product]; //inmutabilidad
          this.cart.next(this.products);
        }

      }
    })
  }
}
