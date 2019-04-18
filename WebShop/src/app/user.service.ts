import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  // location of this object in database
  save(user: firebase.User){
    this.db.object('/users'+user.uid).update({
      // this is the same name which we see in the navBar
      name: user.displayName,
      email: user.email
    });
  }

  // this give the user object from db
  get(uid: string): Observable<any>{
    return this.db.object('/users/'+uid).valueChanges();
  }
}
