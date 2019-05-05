import { ShoppingCartItem } from './shoppingcart-item';
import {Product} from "./product";

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(data?: Partial<ShoppingCart>) {
    Object.assign(this, data);
  }

  get productIds() {
    return Object.keys(this.items);
  }



  getQuantity(product: Product) {


    let item = this.items[product.key];
    return item ? item.quantity : 0;
  }




  get TotalPrice() {
    let countTotalPrice = 0;
    for (let productId in this.items)
      countTotalPrice += this.items[productId].quantity * this.items[productId].product.price;
    return countTotalPrice;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items)
      count += this.items[productId].quantity;
    return count;
  }

}
