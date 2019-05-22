import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  orders$;
  constructor(private orderService: OrderService) { 
    //this.orders$ = orderService.getOrders();
    this.orders$ = orderService.getAll();
  }

  statusChanged(value, key){
    switch (+value) {
      case 0:  
        console.log("In progress" + key);
        this.orderService.updateStatus("In progress", key)
        break;
      case 1:
          console.log("Processing"+ key);
          this.orderService.updateStatus("Processing", key);
        break;
      case 2:
          console.log("Completed"+ key);
          this.orderService.updateStatus("Completed", key)
        break;    
      default:
        break;
    }
  }
}
