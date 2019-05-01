import { ShoppingCartItem } from './shoppingcart-item';
import { totalmem } from 'os';

export class shoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(data?: Partial<shoppingCart>) {
    Object.assign(this, data);

    // let itemsMap : {[key : string]: ShoppingCartItem};
    // for(let productId in data)
    // this.items.push(itemsMap[productId]);
  }

  get productIds() {
    return Object.keys(this.items);
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



