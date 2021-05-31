import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  crt : Cart[];
  err: string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private crtService : CartService) { }

  ngOnInit(): void {
  /*  Here the getAll method is called to retrieve all the carts*/
    this.crtService.getAll().subscribe(
      (data) => {this.crt = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );
  }

 /* Defining the delete method for deleting a particular */
  delete(cid: number){
    if(confirm("Are you sure ?")){
      this.crtService.deleteBYId(cid).subscribe(
        () =>{ this.crt.splice(this.crt.findIndex(o =>o.cartId == cid), 1)}
      );
    }
  }

}
