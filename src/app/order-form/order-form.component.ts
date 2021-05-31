import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  
  orderIdfc: FormControl;
  orderDatefc: FormControl;
  orderStatusfc: FormControl;
  cartIdfc : FormControl

  orderForm: FormGroup;

  isEditing: boolean;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private ordService: OrderService, private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.orderIdfc = new FormControl(null);
      this.orderDatefc = new FormControl(null, [Validators.required]);
      this.orderStatusfc = new FormControl(null, [Validators.required]);
      this.cartIdfc = new FormControl(null, [Validators.required]);

      this.orderForm = new FormGroup({
        orderId: this.orderIdfc,
        orderDate: this.orderDatefc,
        orderStatus: this.orderStatusfc,
        cartId : this.cartIdfc
      });

      this.isEditing = false;
     }
     /*Here getById is called to get the order on the basis of Id*/
  ngOnInit(): void {
    let oid = this.activatedRoute.snapshot.params.oid;
    if(oid){
      this.isEditing = true;
      this.ordService.getById(oid).subscribe(
        (data) => this.orderForm.setValue(data)
      );
    }
  }

  /*Defining handleSubmit method*/
  handleSubmit(){
    let obr = null;
    let order: Order = {
      orderId: this.orderForm.value.customerId,
      orderDate: this.orderForm.value.orderDate,
      orderStatus: this.orderForm.value.orderStatus,
      cartId : this.orderForm.value.cartId,
    }
    if(this.isEditing){
      obr = this.ordService.update(this.orderForm.value);
    } else{
      obr = this.ordService.add(this.orderForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/header/orders")
    );
  }

}
