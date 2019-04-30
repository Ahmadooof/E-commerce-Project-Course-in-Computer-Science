import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
  
  subscribtion:Subscription;
  cart:any;
  products$;
  categories$;
  category: string;
  filterProducts: Product[] = [];
  products: Product[] = [];
  mycat: {
    key: string,
    title: string,
  }

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService,
    private cartService: ShoppingCartService) {
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });

  }

  async ngOnInit() {
    this.subscribtion = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);

  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
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