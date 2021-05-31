import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from '../model/bill';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-user-bill-details',
  templateUrl: './user-bill-details.component.html',
  styleUrls: ['./user-bill-details.component.css']
})
export class UserBillDetailsComponent implements OnInit {

  userBill : Bill;
  err : string;
  constructor(private billService : BillService, private activatedRoute : ActivatedRoute ) { }

  /*Here the getById method is called to retrieve the bill*/
  ngOnInit(): void {
    let bid= this.activatedRoute.snapshot.params.bid;
    if(bid){
      this.billService.getById(bid).subscribe(
        (data) => { this.userBill = data; },
        (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
      )
    }

  }
}