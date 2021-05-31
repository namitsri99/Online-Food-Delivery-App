import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Order } from '../model/order';
import { CartService } from '../service/cart.service';
import { LoginService } from '../service/login.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-user-cart-list',
  templateUrl: './user-cart-list.component.html',
  styleUrls: ['./user-cart-list.component.css']
})
export class UserCartListComponent implements OnInit {

  userCart : Cart;
  userOrders : Order[];
  err : string;
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private cartService : CartService ,private loginService : LoginService, private orderService : OrderService) { }

  /*Here getCartByCustomer and getOrdersByCustomerId is called to get respective cart and order for the customer */
  ngOnInit(): void {
    this.cartService.getCartByCustomer(this.loginService.currentCustomer.customerId).subscribe(
      (data) =>{ this.userCart = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );

    this.orderService.getOrdersByCustomerId(this.loginService.currentCustomer.customerId).subscribe(
      (data) =>{this.userOrders = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );
  }

}