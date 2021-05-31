import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
  catIdfc:FormControl;
  categoryNamefc:FormControl;
  catForm:FormGroup;

  isEditing:boolean;
  
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private catService : CategoryService, private router : Router,
    private activatedRoute : ActivatedRoute) {   
    this.catIdfc = new FormControl(null);
    this.categoryNamefc = new FormControl(null, Validators.required);

    this.catForm = new FormGroup({
      catId: this.catIdfc,
      categoryName: this.categoryNamefc,
    });
 
    this.isEditing = false;
   }

  ngOnInit(): void {
    /*Here the getById method is called for setting the value */
    let catid = this.activatedRoute.snapshot.params.catid;
    if (catid) {
      this.isEditing = true;
      this.catService.getById(catid).subscribe(
        (data) => this.catForm.setValue(data)
      );
    }
  } 
 /*Defining the handleSubmit for updating or adding a category*/
  handleSubmit() {
    let obr = null;
    if (this.isEditing) {
      obr = this.catService.update(this.catForm.value);
    } else {
      obr = this.catService.add(this.catForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/header/categories")
    );
  }
}

 