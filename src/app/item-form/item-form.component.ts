import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  /*Private members of Item */
  itemIdfc : FormControl;
  itemNamefc : FormControl;
  categoryfc : FormControl;
  quantityfc : FormControl;
  costfc : FormControl;
  cartIdfc : FormControl;

  itemform:FormGroup;

  isEditing:boolean;
/*Here the service class used is passed as parameter in constructor*/
  constructor(private itemService:ItemService, private router : Router,
    private activatedRoute : ActivatedRoute) {  

      this.itemIdfc=new  FormControl(null);
      this.itemNamefc=new FormControl(null, Validators.required);
      this.categoryfc=new FormControl(null, Validators.required );
      this.quantityfc=new FormControl(null, Validators.required );
      this.costfc=new FormControl(null, Validators.required );
      this.cartIdfc=new FormControl(null, Validators.required );

      this.itemform=new FormGroup({
        itemId: this.itemIdfc,
        itemName: this.itemNamefc,
        catId : this.categoryfc,
        quantity: this.quantityfc,
        cost: this.costfc,
        cartId: this.cartIdfc,
      });

      this.isEditing=false;
    }
    /*Here getById method is called to set the data*/ 
    ngOnInit(): void {
      let iid = this.activatedRoute.snapshot.params.iid;
      if (iid) {
        this.isEditing = true;
        this.itemService.getById(iid).subscribe(
          (data) => { 
            this.itemform.setValue( {
              itemId: data.itemId,
              itemName: data.itemName,
              catId : data.catId,
              quantity: data.quantity,
              cost: data.cost,
              cartId: data.cartId,
           });
        } );
      }
    } 
  /*Defining handleSubmit updating or adding the item*/
    handleSubmit() {
      let obr = null;
      if (this.isEditing) {
        obr = this.itemService.update(this.itemform.value);
      } else {
        obr = this.itemService.add(this.itemform.value);
      }
      obr.subscribe(
        (data) => this.router.navigateByUrl("/header/items")
      );
    }
  }