import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail/product-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [

    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
