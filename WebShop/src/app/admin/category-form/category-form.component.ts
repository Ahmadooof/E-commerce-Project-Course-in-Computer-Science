import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) {

  }

  save(categories) {
    this.categoriesService.create(categories);

  }
  ngOnInit() {
  }

}
