import { ShoppingCart } from './shopping-cart';

export class Order {
    id?:string;
    datePlaced: number;
    items: any[];
    total: number;
    status: string;
    
    constructor(public userId: string, 
      public shipping: any,
      public shoppingCart: ShoppingCart, 
      public totalCost: number){

        this.status = "In Progress";
        this.datePlaced = new Date().getTime();
        this.totalCost;
        this.items = shoppingCart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
    }
}