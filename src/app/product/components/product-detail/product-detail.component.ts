import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/service/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
  createProduct() {
    const newProduct: Product = {
      id: '250',
      title: 'AJA',
      image:
        'https://yt3.ggpht.com/ytc/AKedOLToU1sSfIWU5xGmwyGTWqP9iqY4MlgRolTMbTQeqg=s900-c-k-c0x00ffffff-no-rj',
      price: 45000,
      description: 'nuevoProdducto',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {});
  }
  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 55555,
      description: 'EDICIOOOOOON',
    };
    this.productsService
      .updateProduct('250', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }
  eliminarProduct(){
    this.productsService
    .deleteProduct('250')
    .subscribe((product) => {
      console.log(product);
    });
  }
}
