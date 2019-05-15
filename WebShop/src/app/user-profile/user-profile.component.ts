import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { take, combineAll } from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/operators/mergeAll';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userSubscription: Subscription;
  userId: string;
  addressIsSaved: boolean;
  address$: Observable<any>;
  items: AngularFireList<any>;
  items$: Observable<any[]>;

  checkbox = {
    checked: false
  }

  address = {
    firstname: '',
    surname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(public authService: AuthService,
    public userService: UserService, public afAuth: AngularFireAuth,
    public db: AngularFireDatabase) { }

  async ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user =>
      this.userId = user.uid);

    this.items = this.db.list('users');
    this.items$ = this.items.valueChanges();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  submitAddress(data) {
    this.userService.saveAddress(this.userId, data);
    this.addressIsSaved = true;

    /*return this.db.database.ref().child('/users/' + this.userId + '/displayAddress/')
      .set(this.addressIsSaved); // Set the boolean to true.*/
  }

  save(data) {
    console.log(data);
  }

  /* BACKUP CODE:

  async getIfDisplayAddress() {
    if ((this.db.database.ref().child('/users/' + this.userId + '/displayAddress/' + this.addressIsSaved).key) == "true") {
      this.testIfWorks = true;
    } else {
      this.testIfWorks = false;
    }
  }*/

  /*TEST*///getData() {
  /*return this.test2$.pipe(
    // switchMap retruns a different observable for each 
    // emitted value by the source (this.test2$):
    switchMap(test2 => {
      // No need to use native firebase api, can be done with angular/fire
      return this.db.list('/users/', ref =>
      ref.orderByChild('test2')
        .equalTo(test2)
        .limitToFirst(1))
          .snapshotChanges()
          .pipe(
            map(actions => actions.map(action => {
            const key = action.payload.key;
            const data = action.payload.val();
            return {key, ...data}
            }))
          )
      }));*/
}

  //getFirstName() {
    /*this.db.list('/users/'), {
      query: {
        orderByChild: ' ',
        equalTo: true
      }
    });*/
    /*return this.db.object('/users/' + this.userId + '/address/')
        .snapshotChanges().pipe();*/
  //}

//}
