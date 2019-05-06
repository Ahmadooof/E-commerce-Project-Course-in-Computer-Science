import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthService } from './auth.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { AdminModule } from './admin/admin.module';
import { FileLinkService } from './file-link.service';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BsNavbarComponent,
    ShopComponent,
    ShoppingCartComponent,
    HomeComponent,
    MyOrdersComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductPageComponent,
    ProductQuantityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},
      {
        path: 'products/:id',
        component: ProductPageComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'my/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
    ]),
    NgbModule.forRoot(),
    AdminModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    FileLinkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
