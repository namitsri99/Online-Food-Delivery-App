import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-user-item-restaurant',
  templateUrl: './user-item-restaurant.component.html',
  styleUrls: ['./user-item-restaurant.component.css']
})
export class UserItemRestaurantComponent implements OnInit {

  urestaurants:Restaurant[];
  err:string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private resService : RestaurantService ,private activatedRoute : ActivatedRoute) { }

  /*Here getResByItem is called to get Restaurant by Item Name*/
  ngOnInit(): void {
    let itemName = this.activatedRoute.snapshot.params.itemName;
    if(itemName){
      this.resService.getResByItem(itemName).subscribe(
        (data) => {this.urestaurants=data;},
        (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
      )
    }
  }

}
