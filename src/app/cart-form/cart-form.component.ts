import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  
  cartIdfc: FormControl;
  customerIdfc: FormControl;
  
  cartForm: FormGroup;
  isEditing: boolean;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private crtService: CartService, private router: Router, 
    private activatedRoute: ActivatedRoute ) {
      this.cartIdfc = new FormControl(null);
      this.customerIdfc = new FormControl(null);

      this.cartForm = new FormGroup({
        cartId: this.cartIdfc,
        customerId: this.customerIdfc
      });

      this.isEditing = false;
     }

  ngOnInit(): void {
   /* Here the getById method is called to set data into the carts*/
    let cid = this.activatedRoute.snapshot.params.cid;
    if(cid){
      this.isEditing = true;
      this.crtService.getById(cid).subscribe(
        (data) => this.cartForm.setValue(data)
      );
    }
  }
  /*Defining handleSubmit for updating or adding a cart*/
  handleSubmit(){
    let obr = null;
    if(this.isEditing){
      obr = this.crtService.update(this.cartForm.value);
    } else{
      obr = this.crtService.add(this.cartForm.value);
    }

    obr.subscribe(
      (data) => this.router.navigateByUrl("/header/carts")
    );
  }

}
