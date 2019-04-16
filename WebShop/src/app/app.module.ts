import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthService } from './auth.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BsNavbarComponent,
    ShopComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'shop', component: ShopComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'login', component: LoginComponent}
    ]),
    NgbModule.forRoot()
    ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
