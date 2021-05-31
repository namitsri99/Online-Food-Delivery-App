import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { BillService } from '../service/bill.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-user-bill-list',
  templateUrl: './user-bill-list.component.html',
  styleUrls: ['./user-bill-list.component.css']
})
export class UserBillListComponent implements OnInit {

  userBills : Bill[];
  err : string;
  cid: number;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private billService : BillService ,private loginService : LoginService) { }

  /*Here getBillsByCustomer method is called to get the particular customer Bill*/
  ngOnInit(): void {
    this.billService.getBillsByCustomer(this.loginService.currentCustomer.customerId).subscribe(
      (data) =>{this.userBills = data; console.log(data);},
      (err) => {console.log (err); this.err = "Sorry. Unable to retrieve data"}
    );
  }

}