import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/take';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
/*
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }
*/
  constructor(categoryService: CategoryService, private productService: ProductService) {
    this.categories$ = categoryService.getAll();
  }


  save(product) {
    this.productService.create(product);
  }

  ngOnInit() {
  }

}
