import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  current: Order;
  orders$;
  selectedStatus = 0;
  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }

  //TODO: 
  statusChanged(value){
    switch (+value) {
      case 0:  
        console.log("In progress");
        break;
      case 1:
          console.log("Processing");
        break;
      case 2:
          console.log("Completed");
        break;    
      default:
        break;
    }
  }

  //TODO:
  updateOrder(){}
}
