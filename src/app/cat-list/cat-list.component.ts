import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  categories : Category[];
  err : string;

 /* Here the service class used is passed as parameter in constructor*/
  constructor(private categoryService : CategoryService) { }
 

  ngOnInit(): void {
    /*Here getAll method is called for retrieving all the categories*/
    this.categoryService.getAll().subscribe(
      (data) => this.categories = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }

  /*Defining the delete method for deleting the category*/
  delete(catId: number) {
    if (confirm("Are you sure?")) {
      this.categoryService.deleteById(catId).subscribe(
        () => { this.categories.splice(this.categories.findIndex(cat => cat.catId == catId), 1) }
      );
    }
  }

 
}
