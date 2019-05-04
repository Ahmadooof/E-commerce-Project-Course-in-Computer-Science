import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCartComponent;
  @Input('product-card') ProductCardComponent;
  @Input('link') link: String;
  @Input('hasLink') hasLink: boolean;

  constructor(private shoppingCartService: ShoppingCartService, private productsService: ProductService) { }

  ngOnInit() {
  }

}
