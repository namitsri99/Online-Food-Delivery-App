import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* member of LoginService which is used to store the current customer */
    private _currentCustomer: Login;

  /* This Api is reposible for storing the url coming from the backend using this api navigation is done for this module at front end */
  loginApi : string;

  /* httpClientModule is imported as hhtp request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient ) { 
        this.currentCustomer=null;
    this.loginApi = "http://localhost:8082/login";
  }

  /* getter and setter of currentCustomer*/
  get currentCustomer(){
    return this._currentCustomer;
  }

  set currentCustomer(cc:Login){
    this._currentCustomer=cc;
  }

  /* For getting a user signed in for using the application */
  singIn(login : Login) : Observable<Login>{
    return this.httpClient.post<Login>(`${this.loginApi}/signin`,login);
  }

  /* getting a user registered using this method */
  add(login : Login) : Observable<Login>{
    return this.httpClient.post<Login>(this.loginApi,login);
  }

}

