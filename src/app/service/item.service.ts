import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Items } from '../model/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  /* This Api is reposible for storing the url coming from the backend using this api, navigation is done for this module at front end */
  itemsApi:string;

  /* httpClientModule is imported as http request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient) {
    this.itemsApi="http://localhost:8082/items";
  }

  /*This method is defined to retrieve all the items */
  getAll() : Observable<Items[]>{
    return this.httpClient.get<Items[]>(this.itemsApi);
   }

   /*This method is defined to retrieve item by Id */
   getById(itemId:number) : Observable<Items>{
    return this.httpClient.get<Items>(`${this.itemsApi}/${itemId}`);

  }

  /*This method is defined to delete the item by Id */
  deleteById(itemId:number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.itemsApi}/${itemId}`);
  }
  /*This method is defined to add an Item */
  add(item : Items) :Observable <Items>{
    return this.httpClient.post<Items>(this.itemsApi,item);
  }

   /*This method is defined to update an Item */
  update(item :Items) : Observable<Items>{
    return this.httpClient.put<Items>(this.itemsApi,item);
  }
}