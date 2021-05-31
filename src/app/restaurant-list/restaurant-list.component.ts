import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants : Restaurant[];
  err:string;
  
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private restaurantsService :RestaurantService) { }

  ngOnInit(): void {
    /*Here the getAll method is called to retrieve all the restaurants */
    this.restaurantsService.getAll().subscribe(
      (data) => this.restaurants = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }
  /*Defining the delete method for deleting a particular restaurant*/
  delete(rId: number) {
    if (confirm("Are you sure?")) {
      this.restaurantsService.deleteById(rId).subscribe(
        () => { this.restaurants.splice(this.restaurants.findIndex(r => r.restaurantId == rId), 1) }
      );
    }
  }

}