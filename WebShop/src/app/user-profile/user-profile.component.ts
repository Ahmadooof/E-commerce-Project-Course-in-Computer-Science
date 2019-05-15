import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userSubscription: Subscription;
  userId: string;
  addressIsSaved: boolean;

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

}
