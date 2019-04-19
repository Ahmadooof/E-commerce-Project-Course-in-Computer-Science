import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses$;

  constructor(private productService: ProductService) {
    this.courses$ = this.productService.getAll();
   }
 
  ngOnInit() {
  }

}
