import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
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
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BsNavbarComponent,
    ShopComponent,
    ShoppingCartComponent,
    HomeComponent,
    MyOrdersComponent,
    AdminCoursesComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductsComponent,
    CategoryFormComponent,
    AdminCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {
        path: 'my/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'admin/courses/new',
        component:  ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      { //TODELETE
        path: 'admin/courses/newCategory',
        component:  CategoryFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'admin/courses/:id',
        component:  ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'admin/courses',
        component: AdminCoursesComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      },
      {
        path: 'admin/categories/newCategory',
        component: CategoryFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/categories/:id',
        component: CategoryFormComponent,
        canActivate:[AuthGuard,AdminAuthGuard]
      },
      {
        path: 'admin/categories',
        component: AdminCategoriesComponent,
        canActivate: [AuthGuard, AdminAuthGuard] // AdminAuthGuard protects the route from non-admin users.
      }

    ]),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
