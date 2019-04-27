import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$; 
  categories$;
  category: string;
  filterProducts: Product [] = [];
  products: Product[] = [];
  mycat: {
    key: string,
    title: string,
  }

  constructor(
    route: ActivatedRoute, 
    productService: ProductService, 
    categoryService: CategoryService) { 
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
    route.queryParamMap.subscribe(params => {
        this.category = params.get('category'); 
    });
  }
  
 

}


/**
 *  constructor(
    route: ActivatedRoute, 
    productService: ProductService, 
    categoryService: CategoryService) { 
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
    route.queryParamMap.subscribe(params => {
        this.category = params.get('category'); 
    });
  }
 * 
 */