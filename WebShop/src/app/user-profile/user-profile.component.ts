import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  address = {
    firstname: "",
    surname: "",
    address1: "",
    address2: '',
    city: '',
    state: '',
    zip: ''
  };
  userSubscription: Subscription;
  userId: string;
  show: boolean;

  constructor(private authService: AuthService,
    private userService: UserService) { }

  async ngOnInit() {
    this.show = false;
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  submitAddress() {
    let billingAddress = {
      address: this.address,
      /*firstname: 'Johanna Sarah',
      surname: 'Doe',
      address1: 'Tutorroad 18, LGH 14',
      address2: 'Apartment',
      city: 'Somewhere',
      state: 'Elsewhere',
      zip: '666 66'*/
    };
    //this.show = true;
    console.log(this.address);
    console.log(this.userId);
    this.userService.saveAddress(this.userId, this.address);
  }

}
