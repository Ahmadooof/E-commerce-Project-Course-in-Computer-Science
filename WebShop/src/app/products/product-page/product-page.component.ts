import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCartComponent;
  @Input('product-card') ProductCardComponent;
  @Input('link') link: String;
  @Input('hasLink') hasLink: boolean;

  productID;
  // myProduct: Product;
  myProd$: Observable<any>;

  constructor(private shoppingCartService: ShoppingCartService, private ps: ProductService, private router: Router) {

    this.productID = this.router.url.substr(this.router.url.lastIndexOf('=') + 1);

    console.log(this.productID);

    // ps.get(this.productID).snapshotChanges().pipe(
    //   map(a => ({ key: a.key, ...a.payload.val() } as Product))
    //   ).subscribe(p => this.myProduct = p);
    
    this.myProd$ = ps.get(this.productID).valueChanges();

    }

  ngOnInit() {
    
  }

}
