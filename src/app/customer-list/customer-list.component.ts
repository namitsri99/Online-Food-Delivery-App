import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  cust : Customer[];
  err : string;
 /*Here the service class used is passed as parameter in constructor*/
  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    /*Here the getAll method is called to retrieve all the customers*/
    this.custService.getAll().subscribe(
      (data) => {this.cust = data; console.log(data);},
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }

  /*Defining the delete method for deleting a particular customer*/
    delete(customerId: number) {
      if (confirm( "Are you sure?")) {
        this.custService.deleteById(customerId).subscribe(
          () => { this.cust.splice(this.cust.findIndex(e => e.customerId == customerId), 1) }
        );
    } 
  }

}
