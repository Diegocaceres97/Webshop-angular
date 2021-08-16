import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/service/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => console.log(rta));
  }
}