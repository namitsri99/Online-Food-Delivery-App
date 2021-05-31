import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-user-restaurant-list',
  templateUrl: './user-restaurant-list.component.html',
  styleUrls: ['./user-restaurant-list.component.css']
})
export class UserRestaurantListComponent implements OnInit {

  urestaurants : Restaurant[];
  err:string;
  
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private restaurantsService :RestaurantService) { }

  /*Here getAll method is called to get all the restaurants*/
  ngOnInit(): void {
    this.restaurantsService.getAll().subscribe(
      (data) => this.urestaurants = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }
}

