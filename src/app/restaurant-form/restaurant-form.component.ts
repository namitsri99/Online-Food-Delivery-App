import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  
  restaurantIdfc:FormControl;
  restaurantNamefc:FormControl;
  itemIdfc:FormControl;
  managerNamefc:FormControl;
  contactNumberfc:FormControl;
  buildingNamefc:FormControl;
  areafc:FormControl;
  streetNofc:FormControl;
  cityfc:FormControl;
  statefc:FormControl;
  pincodefc:FormControl;
  countryfc:FormControl;
 
  
  restform: FormGroup;

  isEditing:boolean;

/*Here the service class used is passed as parameter in constructor*/
  constructor(private rService : RestaurantService, private router : Router,
    private activatedRoute : ActivatedRoute) { 

      this.restaurantIdfc = new FormControl(null);
      this.restaurantNamefc = new FormControl(null, Validators.required);
      this.itemIdfc= new FormControl(null, Validators.required );
      this.managerNamefc= new FormControl(null, Validators.required);
      this.contactNumberfc = new FormControl(null, [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
      this.areafc= new FormControl(null, Validators.required);
      this.streetNofc = new FormControl(null, Validators.required);
      this.buildingNamefc = new FormControl(null, Validators.required);
      this.cityfc = new FormControl(null, Validators.required );
      this.statefc = new FormControl(null, Validators.required );
      this.pincodefc = new FormControl(null, Validators.required);
      this.countryfc = new FormControl(null, Validators.required);  
    
      this.restform = new FormGroup({
        restaurantId: this.restaurantIdfc,
        restaurantName : this.restaurantNamefc,
        itemId : this.itemIdfc,
        managerName : this.managerNamefc,
        contactNumber :this.contactNumberfc,
        buildingName : this.buildingNamefc,
        area :this.areafc,
        streetNo : this.streetNofc,
        city : this.cityfc,
        state : this.statefc,
        pincode : this.pincodefc,
        country : this.countryfc
  
      });
   
      this.isEditing = false;
     }
    
    
     
     /*Here the getById method is called to retrieve the restaurant by Id */
     ngOnInit(): void {
      let rid = this.activatedRoute.snapshot.params.rid;
      if (rid) {
        this.isEditing = true;
        this.rService.getById(rid).subscribe(
          
          (data) => { 
          this.restform.setValue( {
            restaurantId: data.restaurantId,
            restaurantName : data.restaurantName,
            itemId : data.itemId,
            managerName : data.managerName,
            contactNumber : data.contactNumber,
            buildingName:data.address.buildingName,
            area :data.address.area,
            streetNo :data.address.streetNo,
            city :data.address.city,
            state :data.address.state,
            country :data.address.country,
            pincode :data.address.pincode   
          });
        });
      }
    } 
  /*Defining handleSubmit method*/
    handleSubmit() {
      let obr = null;

      let restaurant : Restaurant = {
      restaurantId: this.restform.value.restaurantId,
      restaurantName : this.restform.value.restaurantName,
      itemId : this.restform.value.itemId,
      managerName : this.restform.value.managerName,
      contactNumber : this.restform.value.contactNumber,

       address : {
          buildingName: this.restform.value.buildingName,
          area : this.restform.value.area,
          streetNo : this.restform.value.streetNo,
          city : this.restform.value.city,
          state : this.restform.value.state,
          country : this.restform.value.country,
          pincode : this.restform.value.pincode,
        }
    }
      if (this.isEditing) {
        obr = this.rService.update(restaurant);
      } else {
        obr = this.rService.add(restaurant);
      }
      obr.subscribe(
        (data) => this.router.navigateByUrl("/header/restaurants")
      );
    }
  }
  