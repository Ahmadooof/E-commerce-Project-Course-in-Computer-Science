import { Product } from './../models/product';
import { Component, OnDestroy } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { SearchService } from './search.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { getLocaleCurrencyName } from '@angular/common';

// this is where we get the Firebase objects (Categories).
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']; // Related to Search Function

const courses = ['Discrete Mathematics', 'Angular Fire Master Course', 'How to make coctails',
  'Birds and Engineering', 'Molecular structure of Bees and Honey', 'How to teamwork without murder',
  'Language and Logic', 'Dont leave empty courses', 'Everything in cells', 'Cryptography',
  'Computer security', 'Life walkthrough for beginners', 'Helena testing categories', 'How to breathe',
  'Helena will delete this eventually', 'Breathtaking', 'Coding theory']; // Hard coded courses.
  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers (Search)
  })
  export class SearchComponent  implements OnDestroy{
    
  
    filterpotatos: any [];
    potato: any[];
    subs : Subscription;

    constructor (route: ActivatedRoute, 
      config: NgbTypeaheadConfig, 
      searchService: SearchService, 
      categoryService: CategoryService, 
      db: AngularFireDatabase, 
      productService: ProductService) {
      // customize default values of typeaheads used by this component tree
      /**/ config.showHint = true; // Related to Search Function
      
     this.subs = productService.getAll().subscribe(p => this.filterpotatos = this.potato = p);
    } 
  
    search = (text$: Observable<string>) =>
    text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 1 ? []
          : courses.filter(t => t.toLowerCase()
            .startsWith(term.toLocaleLowerCase()))
            .splice(0, 10))
      )
  
  

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}



/**
 @Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers (Search)
})
export class SearchComponent {

  constructor (route: ActivatedRoute, 
    config: NgbTypeaheadConfig, 
    searchService: SearchService, 
    categoryService: CategoryService, 
    db: AngularFireDatabase, 
    productService: ProductService) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true; // Related to Search Function
      
  
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : courses.filter(t => t.toLowerCase()
          .startsWith(term.toLocaleLowerCase()))
          .splice(0, 10))
    )
}
 */