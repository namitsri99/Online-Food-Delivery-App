import { Component, OnInit } from '@angular/core';
import { Items } from '../model/items';
import { Order } from '../model/order';
import { ItemService } from '../service/item.service';
import { LoginService } from '../service/login.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent implements OnInit {

  /* some private members retrieving and viewing the data */

  userOrd : Order[];
  err : string;
  cid: number;

  /* Here the service class used are passed as parameter in constructor */
  constructor(private orderService : OrderService,private loginService : LoginService) { }


  ngOnInit(): void {

    /* Here getOrderByCustomerId method is called to retrieve the orders of current customer */

    this.orderService.getOrdersByCustomerId(this.loginService.currentCustomer.customerId).subscribe(
      (data) =>{this.userOrd = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );
  }

}