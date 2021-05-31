import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  bills : Bill[];
  err : string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private billService : BillService) { }
 

  ngOnInit(): void {
    
    /*Here the getAll method is called to retrieve all the orders */
    this.billService.getAll().subscribe(
      (data) => this.bills = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }

  /*Defining the delete method for deleting a particular bill*/
  delete(bId: number) {
    if (confirm("Are you sure?")) {
      this.billService.deleteById(bId).subscribe(
        () => { this.bills.splice(this.bills.findIndex(b => b.billId == bId), 1) }
      );
    }
  }

}
