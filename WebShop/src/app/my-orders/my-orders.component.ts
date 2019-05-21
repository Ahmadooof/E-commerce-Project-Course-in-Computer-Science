import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Order } from '../models/Order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;
  cart$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private cartService: ShoppingCartService,
  ) { 
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  isCompleted(){
    return false;
  }


}