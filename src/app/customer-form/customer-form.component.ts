import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  /*Private members of Customer*/
  customerIdfc : FormControl;
  firstNamefc : FormControl;
  lastNamefc : FormControl;
  genderfc : FormControl;
  agefc : FormControl;
  mobileNumberfc : FormControl;
  emailfc : FormControl;
  buildingNamefc : FormControl;
  areafc : FormControl;
  streetNofc : FormControl;
  cityfc : FormControl;
  statefc: FormControl;
  countryfc : FormControl; 
  pincodefc : FormControl;

  customerForm: FormGroup;

  isEditing : boolean;

  
  /*Here the service class used is passed as parameter in constructor*/
  constructor(private custService : CustomerService, private router : Router,
    private activatedRoute : ActivatedRoute) { 

      
    this.customerIdfc = new FormControl(null);
    this.firstNamefc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.lastNamefc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.genderfc= new FormControl('',[Validators.required]);
    this.agefc= new FormControl('',[Validators.required,Validators.min(13), Validators.max(80)]);
    this.mobileNumberfc = new FormControl(null, [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.emailfc = new FormControl(null, Validators.required);
    this.buildingNamefc = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.areafc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.streetNofc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.cityfc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.statefc = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.countryfc= new FormControl(null,[Validators.required]);
    this.pincodefc = new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(6)]);

    this.customerForm= new FormGroup({
      customerId : this.customerIdfc,
      firstName : this.firstNamefc,
      lastName : this.lastNamefc,
      gender: this.genderfc,
      age : this.agefc,
      mobileNumber : this.mobileNumberfc,
      email : this.emailfc,
      buildingName: this.buildingNamefc,
      area : this.areafc,
      streetNo : this.streetNofc,
      city : this.cityfc,
      state : this.statefc,
      country : this.countryfc,
      pincode : this.pincodefc,

    });

    this.isEditing = false;
    

  };

  ngOnInit(): void {
    let eid = this.activatedRoute.snapshot.params.eid;
    if (eid) {
      this.isEditing = true;
      this.custService.getById(eid).subscribe(
        
        /*For setting the data of customer*/
        (data) =>{ 
          this.customerForm.setValue( {
              customerId : data.customerId,
              firstName : data.firstName,
              lastName :data.lastName,
              gender:data.gender,
              age :data.age,
              mobileNumber :data.mobileNumber,
              email :data.email,
              buildingName:data.address.buildingName,
              area :data.address.area,
              streetNo :data.address.streetNo,
              city :data.address.city,
              state :data.address.state,
              country :data.address.country,
              pincode :data.address.pincode   
          });
        console.log(this.customerForm.value);
        }
      );
    }
  }
/*Defining handleSubmit method*/
  handleSubmit() {
    let obr = null;
    let customer : Customer = {
      customerId : this.customerForm.value.customerId,
      firstName : this.customerForm.value.firstName,
      lastName : this.customerForm.value.lastName,
      gender: this.customerForm.value.gender,
      age : this.customerForm.value.age,
      mobileNumber : this.customerForm.value.mobileNumber,
      email : this.customerForm.value.email,
      address : {
          buildingName: this.customerForm.value.buildingName,
          area : this.customerForm.value.area,
          streetNo : this.customerForm.value.streetNo,
          city : this.customerForm.value.city,
          state : this.customerForm.value.state,
          country : this.customerForm.value.country,
          pincode : this.customerForm.value.pincode,
        }
      }

      /*For updating or editing a particular customer*/
    if (this.isEditing) {
      obr = this.custService.update(customer);
    } else {
      obr = this.custService.add(customer);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/header/customers")
    );
  }

}
