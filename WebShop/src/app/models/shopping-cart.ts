import { ShoppingCartItem } from './shoppingcart-item';

export class shoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(data?: Partial<shoppingCart>) {
    Object.assign(this, data);
    // let itemsMap : {[key : string]: ShoppingCartItem};
    // for(let productId in data)
    // this.items.push(itemsMap[productId]);
  }

  get productIds(){
    return Object.keys(this.items);
  }


  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items)
      count += this.items[productId].quantity;

    return count;

  }

}



