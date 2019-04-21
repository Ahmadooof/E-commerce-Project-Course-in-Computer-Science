import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(public db: AngularFireDatabase) { }
/*
  getCategories() {
    return this.db.list('/categories/' );
  }
  */
  getAll() {
    return this.db.list('/categories', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }
}