import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  /* This Api is reposible for storing the url coming from the backend using this api, navigation is done for this module at front end */
    billsApi : string;

  /* httpClientModule is imported as http request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient) {
    this.billsApi = "http://localhost:8082/bills";
   }

   /*This method is defined to retrieve all the bills */
   getAll() : Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(this.billsApi);
   }
    /*This method is defined to retrieve  the bills by Id */
   getById(bid : number) : Observable<Bill>{
     return this.httpClient.get<Bill>(`${this.billsApi}/${bid}`);
   }
   
    /*This method is defined to retrieve  the bills of a particular customer */
   getBillsByCustomer(cid : number) : Observable<Bill[]>{
     return this.httpClient.get<Bill[]>(`${this.billsApi}/customer/${cid}`);
   }

    /*This method is defined to add the bills */
  add(bill : Bill) : Observable<Bill>{
    return this.httpClient.post<Bill>(this.billsApi,bill);
  }
 /*This method is defined to delete the bill by Id */
  deleteById(bid : number) : Observable<void>{
    return this.httpClient.delete<void>( `${this.billsApi}/${bid}`);
  }
 /*This method is defined to update  the bills */
  update(bill : Bill) : Observable<Bill>{
   return this.httpClient.put<Bill>(this.billsApi,bill);
 }

}
