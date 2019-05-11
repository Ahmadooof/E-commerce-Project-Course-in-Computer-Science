import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { BillingAddress } from '../models/billing-address';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userSubscription: Subscription;
  userId: string;
  //addressSaved: boolean;
  //user: BillingAddress;

  name: string;
  surname: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: number;

  constructor(private db: AngularFireDatabase,
    private authService: AuthService,
    private userService: UserService) {
    /*
        //read address from the router, get id(key
        this.id = this.route.snapshot.paramMap.get('id');
        /**
         * OBS
         * This is the part that gets an observable from the db, it is stored in
         * the course field
         */
    /*if (this.id) {
      this.userService.getA(this.id)
        .valueChanges()
        .take(1)
        .subscribe(u => this.user = u);
    }*/
  }

  async ngOnInit() {
    //this.addressSaved = false;
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  submitAddress() {
    let address = {
      name: 'user.name',
      surname: 'user.surname',
      address: 'user.address',
      address2: 'user.address2',
      city: 'user.city',
      state: 'user.state',
      zip: 'user.zip'
      //userId: this.userId
    };
    this.userService.saveAddress(this.userId, address);
  }
  /*
    submitAddress(address) {
      if (this.userId) {
        this.userService.updateAddress(this.userId, address);
      } else {
        this.userService.saveAddress(this.userId, address);
      }
      this.router.navigate(['/shopping-cart']);
    }
  */
}

