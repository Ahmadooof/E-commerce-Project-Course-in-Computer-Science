import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  subscribtion: Subscription;
  cart: any;
  categories$;
  category: string;
  filterProducts: Product[] = [];
  products: Product[] = [];
  userInput = "";

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService,
    private cartService: ShoppingCartService) {
    this.categories$ = categoryService.getAll();

    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filterProducts = this.courseFilter();
      });

    productService.getAll().subscribe(p => this.filterProducts = this.products = p);

  }
 

  //KeyUp
  searchQuery(query: string) {
    this.userInput = query;
    this.filterProducts = this.courseFilter();
  }

  courseFilter(){    
    return this.products.filter(p =>
      p.title.toLowerCase().includes(
        this.userInput.toLowerCase()) && this.categoryCheck(p.category));
  }

  categoryCheck(courseCategory: string) {
    return courseCategory === this.category || !this.category;
  }

  async ngOnInit() {
    this.subscribtion = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);

  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
