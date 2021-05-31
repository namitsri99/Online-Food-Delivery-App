import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {
  
  /* Some private members of Bill Form*/
  billIdfc:FormControl;
  orderfc:FormControl;
  totalItemfc:FormControl;
  totalCostfc:FormControl;
  billDatefc:FormControl;
  billForm:FormGroup;

  isEditing:boolean;

  /*Here the service class used are passed as parameter in constructor*/
  constructor(private bService : BillService, private router : Router,
    private activatedRoute : ActivatedRoute) {   
    this.billIdfc = new FormControl(null);
    this.orderfc = new FormControl(null, Validators.required);
    this.totalItemfc= new FormControl(null, Validators.required );
    this.totalCostfc = new FormControl(null, [Validators.required]);
    this.billDatefc = new FormControl(null, Validators.required );
    

    this.billForm = new FormGroup({
      billId: this.billIdfc,
      orderId : this.orderfc,
      totalItem : this.totalItemfc,
      totalCost : this.totalCostfc,
      billDate : this.billDatefc,
    });
 
    this.isEditing = false;
   }

  ngOnInit(): void {

    /*Here getById method is called to retrieve details of bill*/
    let bid = this.activatedRoute.snapshot.params.bid;
    if (bid) {
      this.isEditing = true;
      this.bService.getById(bid).subscribe(
        (data) => this.billForm.setValue(data)
      );
    }
  } 

  /*Defining handleSubmit updating or adding the bill*/
  handleSubmit() {
    let obr = null;
    if (this.isEditing) {
      obr = this.bService.update(this.billForm.value);
    } else {
      obr = this.bService.add(this.billForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/header/bills")
    );
  }
}