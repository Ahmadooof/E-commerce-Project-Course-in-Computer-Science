import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private cartService: ShoppingCartService,
    private router: Router) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart(){
    this.cartService.clearCart();
  }

  checkout() {
    this.router.navigateByUrl('/checkout');
  }
}
