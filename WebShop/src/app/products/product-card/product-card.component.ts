import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCartComponent;
  @Input('link') link: String;
  @Input('hasLink') hasLink: boolean;

  constructor(private cartService: ShoppingCartService) {
  }

  ngOnInit() {
    
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.ShoppingCartComponent)
      return 0;

    let item = this.ShoppingCartComponent.items[this.product.key];
    return item ? item.quantity : 0;
  }
  
}
