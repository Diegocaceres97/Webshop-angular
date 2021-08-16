import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component'; 
import {TableComponent} from './components/table/table.component';
import {NavComponent} from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent} from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'products-list',
        component: ProductsListComponent,
      },
      {
        path: 'products-list/create',
        component: FormProductComponent,
      },
      {
        path: 'products-list/edit/:id',
        component: ProductEditComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }