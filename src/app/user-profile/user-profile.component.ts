import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  cust: Customer;
  err : string;
  
/*Here the service class used is passed as parameter in constructor*/
  constructor(private custService : CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    /*Here getById method is called to get user information on the basis of Id*/
    this.custService.getById(this.loginService.currentCustomer.customerId).subscribe(
      (data) => { this.cust= data; console.log(data);},
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }

}
