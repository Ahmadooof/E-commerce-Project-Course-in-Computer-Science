import { Order } from './models/Order';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  placeOrder(order){
    return this.db.list('/orders').push(order);
  }

  getOrders(){
    return this.db.list('/orders/').valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId')
    .equalTo(userId)).snapshotChanges().map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() }));
    });
  }

  updateOrder(order: Order){
    this.db.list('/orders/')
  }

}
