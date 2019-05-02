import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.db.list('/products')
      .snapshotChanges().pipe(
        map(actions =>
          actions.map(a => ({ key: a.key, ...a.payload.val() } as Product))
        )
      );
  }

  get(title) {
    return this.db.object('/products/' + title);
  }
}
