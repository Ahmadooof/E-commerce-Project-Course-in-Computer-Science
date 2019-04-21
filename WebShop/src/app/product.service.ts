import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';
/**
 * CRUD courses
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }
  /**
   * OBS This is the part that does not get an actual object from DB
   */
  get(courseID) {
    return this.db.object('/products/'+ courseID);   
  }

  updateProduct(id, product){
    return this.db.object('/products/' + id).update(product);
  }

  deleteProduct(id){
    return this.db.object('/products/' + id).remove();
  }
}
