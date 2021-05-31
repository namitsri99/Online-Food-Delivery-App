import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.css']
})
export class UserOrderDetailsComponent implements OnInit {

  userOrder : Order;
  err : string;
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private orderService : OrderService, private activatedRoute : ActivatedRoute ) { }

  /* Here getById method is called to get orders for a customer*/
  ngOnInit(): void {
    let oid= this.activatedRoute.snapshot.params.oid;
    if(oid){
      this.orderService.getById(oid).subscribe(
        (data) => { this.userOrder=data; },
        (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
      )
    }

  }

}
