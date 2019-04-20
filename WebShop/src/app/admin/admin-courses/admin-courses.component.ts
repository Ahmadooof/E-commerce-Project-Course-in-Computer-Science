import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses$;

  constructor(private productService: ProductService, private router: Router) {
    this.courses$ = this.productService.getAll();
   }
  
   OnEdit(id: string){
     console.log(id);
    this.router.navigate(['/admin/courses/', id])
   }

   Cuack(foo: string){console.log('cuak' + foo)}
 
  ngOnInit() {
  }

}
