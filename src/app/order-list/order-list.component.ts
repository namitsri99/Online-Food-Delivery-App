import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  ord : Order[];
  err: string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private ordService : OrderService) { }

/*Here the getAll method is called to retrieve all the orders*/
  ngOnInit(): void {
    this.ordService.getAll().subscribe(
      (data) => {this.ord = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );
  }

  /*Defining the delete method for deleting a particular bill*/
  delete(oid: number){
    if(confirm("Are you sure ?")){
      this.ordService.deleteBYId(oid).subscribe(
        () =>{ this.ord.splice(this.ord.findIndex(o =>o.orderId == oid), 1)}
      );
    }
  }
}
