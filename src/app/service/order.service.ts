import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  /* This Api is reposible for storing the url coming from the backend using this api navigation is done for this module at front end */
  orderApi: string;

  /* httpClientModule is imported as hhtp request is required for getting mapping requests from backend */
  constructor(private httpClient: HttpClient) {
    this.orderApi = "http://localhost:8082/orders";
  }

  /*This method is defined to retrieve all the orders */
  getAll(): Observable<Order[]>{
     return this.httpClient.get<Order[]>(this.orderApi)
  }

  /*This method is defined to retrieve orders by Id */
  getById(oid: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.orderApi}/${oid}`);
  }

  /*This method is defined to retrieve orders by  Customer Id */
  getOrdersByCustomerId(cid: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.orderApi}/customer/${cid}`);
  }

  /*This method is defined to delete order */
  deleteBYId(oid: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.orderApi}/${oid}`);
  }

  /*This method is defined to add order  */
  add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.orderApi, order);
  }

  /*This method is defined to update order */
  update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.orderApi, order);
  }
}
