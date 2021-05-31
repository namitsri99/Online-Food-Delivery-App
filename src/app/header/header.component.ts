import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  /*For signing Out*/
  signOut(){
    this.loginService.currentCustomer=null;
    this.router.navigateByUrl("/");
  } 
}
