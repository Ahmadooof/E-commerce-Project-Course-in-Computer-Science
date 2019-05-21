import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  orders$;
  selectedStatus = 0;
  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }

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

  updateOrder(order){

  }
}
