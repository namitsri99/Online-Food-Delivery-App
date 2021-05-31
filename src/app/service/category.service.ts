import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /* This Api is reposible for storing the url coming from the backend using this api, navigation is done for this module at front end */
  categoriesApi : string;

  /* httpClientModule is imported as http request is required for getting mapping requests from backend */
  constructor(private httpClient : HttpClient) {
    this.categoriesApi = "http://localhost:8082/categories";
   }

   /*This method is defined to retrieve all the categories */
   getAll() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.categoriesApi);
   }

   /*This method is defined to retrieve  the category by Id */
   getById(catid : number) : Observable<Category>{
     return this.httpClient.get<Category>( `${this.categoriesApi}/${catid}`);
   }
   

   /*This method is defined to add the category */
  add(Category : Category) : Observable<Category>{
    return this.httpClient.post<Category>(this.categoriesApi,Category);
  }

  /*This method is defined to delete the category */
  deleteById(catid : number) : Observable<void>{
    return this.httpClient.delete<void>( `${this.categoriesApi}/${catid}`);
  }

  /*This method is defined to update  the category */
  update(Category : Category) : Observable<Category>{
   return this.httpClient.put<Category>(this.categoriesApi,Category);
 }

}