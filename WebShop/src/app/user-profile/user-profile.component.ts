import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> 5be927ecc38e8268da3fa6c30cd73b171b37fd85

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userSubscription: Subscription;
  userId: string;
  show: boolean;

  address = {
    firstname: "",
    surname: "",
    address1: "",
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(private authService: AuthService,
    private userService: UserService) { }

  async ngOnInit() {
    // this if/else block doesn't work properly. 
    // It needs to update seperately across accounts but currently it is across all.
    if (!this.userService.getAddress(this.userId)) { this.show = true; }
    else { this.show = false; }

    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  submitAddress(data) {
    this.userService.saveAddress(this.userId, data);
  }

  save(data) {
    console.log(data);
  }

}
