import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
/* This Api is reposible for storing the url coming from the backend using this api, navigation is done for this module at front end */
  cartApi: string;
  
  /* httpClientModule is imported as http request is required for getting mapping requests from backend */
  constructor(private httpClient: HttpClient) {
    this.cartApi = "http://localhost:8082/carts";
  }
 
  /*This method is defined to retrieve all the carts */
  getAll(): Observable<Cart[]>{
     return this.httpClient.get<Cart[]>(this.cartApi)
  }

  /*This method is defined retrieve the cart by Id */
  getById(cid: number): Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.cartApi}/${cid}`);
  }

    /*This method is defined retrieve the cart by Customer */
  getCartByCustomer(cid : number) : Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.cartApi}/customer/${cid}`);
  }


  /*This method is defined delete the cart by Id */
  deleteBYId(cid: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${this.cartApi}/${cid}`);
  }
  /*This method is defined add the cart  */
  add(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(this.cartApi, cart);
  }
  /*This method is defined update the cart  */
  update(cart: Cart): Observable<Cart> {
    return this.httpClient.put<Cart>(this.cartApi, cart);
  }
}
