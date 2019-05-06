import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ProductService } from 'src/app/product.service';
import { FileLinkService} from 'src/app/file-link.service';
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
  linkObject ;
  downloadLink: String;


  constructor(private shoppingCartService: ShoppingCartService,
              private ps: ProductService, 
              private router: Router, 
              private ls : FileLinkService) {

    this.productID = this.router.url.substr(this.router.url.lastIndexOf('=') + 1);

    console.log(this.productID);

    // ps.get(this.productID).snapshotChanges().pipe(
    //   map(a => ({ key: a.key, ...a.payload.val() } as Product))
    //   ).subscribe(p => this.myProduct = p);
    
    //this code snipped in the constructor geths the link for the additional
    // material if it exists and puts it downloadLink: String
    this.myProd$ = ps.get(this.productID).valueChanges();
    this.linkObject = ls.get(this.productID);
    this.linkObject.snapshotChanges().subscribe(a => this.downloadLink=a.payload.val() );
    }

  ngOnInit() {
    
  }

}
