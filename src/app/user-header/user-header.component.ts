import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) {

   }
  ngOnInit(): void {
  }

  /*For signing out*/
  signOut(){
    this.loginService.currentCustomer=null;
    this.router.navigateByUrl("/");
  }
}
