import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { shoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

   async getCart(): Promise<AngularFireObject<shoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId)
      return cartId;

    // if we don't have shopping-cart then we are store it in db and store it in the user's local storage (browser)
    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, +1);
  }

  async removeFromCart(product:Product){
   this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product:Product, change:number){
    let cartId = await this.getOrCreateCartId();
    let item$: Observable<any> = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key).valueChanges();
    let item$$ = this.getItem(cartId, product.key);
    item$.take(1).subscribe(item => {
      if (item === null)
        item$$.set({ product: product, quantity: change });
      else
        item$$.update({ quantity: (item.quantity) + change });
    });
  }
}
