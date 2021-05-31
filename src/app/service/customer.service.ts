import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private _currentCustomer: Customer;
  /* This Api is reposible for storing the url coming from the backend using this api, navigation is done for this module at front end */
  custApi : string;

  /* httpClientModule is imported as http request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient ) { 
    // this.currentCustomer=null;
    this.custApi = "http://localhost:8082/customers";
  }

  // get currentCustomer(){
  //   return this._currentCustomer;
  // }

  // set currentCustomer(cc:Customer){
  //   this._currentCustomer=cc;
  // }

  /*This method is defined to retrieve all the customers */
  getAll() : Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.custApi);
   }

   /*This method is defined to retrieve customer by Id */
   getById(cid : number) : Observable<Customer>{
     return this.httpClient.get<Customer>( `${this.custApi}/${cid}`);
   }

   /*This method is defined to delete customer by Id */
   deleteById(cid : number) : Observable<void>{
     return this.httpClient.delete<void>( `${this.custApi}/${cid}`);
   }

   /*This method is defined to add customer  */
   add(customer : Customer) : Observable<Customer>{
     return this.httpClient.post<Customer>(this.custApi,customer);
   }

   /*This method is defined to update customer  */
   update(customer : Customer) : Observable<Customer>{
    return this.httpClient.put<Customer>(this.custApi,customer);
  }
}
