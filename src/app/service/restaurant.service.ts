import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
 /* This Api is reposible for storing the url coming from the backend using this api navigation is done for this module at front end */
  restaurantsApi:string;

  /* httpClientModule is imported as hhtp request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient) { 
    this.restaurantsApi="http://localhost:8082/restaurants";
  }

  /*This method is defined to retrieve all the restaurants */
  getAll() : Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.restaurantsApi);
   
  }
  /*This method is defined to retrieve restaurants by Id */
  getById(rid:number) : Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.restaurantsApi}/${rid}`);

  }
/*This method is defined to retrieve all the restaurants by Item */
  getResByItem(itemName : string) : Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.restaurantsApi}/item/${itemName}`);
  }

  /*This method is defined to delete the restaurants by Id */
  deleteById(rid:number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.restaurantsApi}/${rid}`);
  }
  /*This method is defined to add restaurants */
  add(restaurant : Restaurant) :Observable <Restaurant>{
    return this.httpClient.post<Restaurant>(this.restaurantsApi,restaurant);
  }

  /*This method is defined to update  the restaurants */
  update(restaurant :Restaurant) : Observable<Restaurant>{
    return this.httpClient.put<Restaurant>(this.restaurantsApi,restaurant);
  }
}