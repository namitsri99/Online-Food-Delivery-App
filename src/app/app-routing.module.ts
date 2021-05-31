import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillFormComponent } from './bill-form/bill-form.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillComponent } from './bill/bill.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CategoryComponent } from './category/category.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserBillDetailsComponent } from './user-bill-details/user-bill-details.component';
import { UserBillListComponent } from './user-bill-list/user-bill-list.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { UserCartListComponent } from './user-cart-list/user-cart-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCustomerComponent } from './user-customer/user-customer.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserItemListComponent } from './user-item-list/user-item-list.component';
import { UserItemRestaurantComponent } from './user-item-restaurant/user-item-restaurant.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserProfileUpdateComponent } from './user-profile-update/user-profile-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRestaurantIdComponent } from './user-restaurant-id/user-restaurant-id.component';
import { UserRestaurantListComponent } from './user-restaurant-list/user-restaurant-list.component';
import { UserRestaurantComponent } from './user-restaurant/user-restaurant.component';

/*Defining respective paths*/
const routes: Routes = [
  { path : 'header', component : HeaderComponent, children : [
    { path : 'dashboard', component : DashboardComponent },
  { path : 'customers', component : CustomerComponent, children : [
      { path : 'list', component : CustomerListComponent },
      { path : 'add', component : CustomerFormComponent },
      { path : 'edit/:eid', component : CustomerFormComponent },
      { path : '', redirectTo : 'list', pathMatch : 'full'}
] },

  { path : 'categories', component : CategoryComponent, children : [
    { path : 'list', component : CatListComponent },
    { path : 'add', component : CatFormComponent },
    { path : 'edit/:catid', component : CatFormComponent },
    { path : '', redirectTo : 'list', pathMatch : 'full'}
] },

  { path : 'carts', component : CartComponent, children : [
    { path : 'list', component : CartListComponent },
    { path : 'add', component :CartFormComponent },
    { path : 'edit/:cid', component : CartFormComponent },
    { path : '', redirectTo : 'list', pathMatch : 'full'}
] },

  { path : 'bills', component : BillComponent, children : [
    { path : 'list', component : BillListComponent },
    { path : 'add', component : BillFormComponent },
    { path : 'edit/:bid', component : BillFormComponent },
    { path : '', redirectTo : 'list', pathMatch : 'full'}
] },

  { path : 'items', component : ItemComponent, children : [
    { path : 'list', component : ItemListComponent },
    { path : 'add', component : ItemFormComponent },
    { path : 'edit/:iid', component : ItemFormComponent },
    { path : '', redirectTo : 'list', pathMatch : 'full'}
] },

{ path : 'orders', component : OrderComponent, children : [
  { path : 'list', component : OrderListComponent },
  { path : 'add', component : OrderFormComponent },
  { path : 'edit/:oid', component : OrderFormComponent },
  { path : '', redirectTo : 'list', pathMatch : 'full'}
] },
  { path : 'restaurants', component : RestaurantComponent, children : [
      { path : 'list', component : RestaurantListComponent },
      { path : 'add', component : RestaurantFormComponent },
      { path : 'edit/:rid', component : RestaurantFormComponent },
      { path : '', redirectTo : 'list', pathMatch : 'full'}
  ] 
  }]
},

{ path : 'userHeader', component : UserHeaderComponent , children : [
  { path : 'dashboard', component : DashboardComponent },
  { path : 'urestaurants', component : UserRestaurantComponent, children : [
    {path : 'list', component : UserRestaurantListComponent },
    {path : 'restaurantById', component : UserRestaurantIdComponent },
    { path : '', redirectTo : 'list', pathMatch : 'full'}
  ]},
  { path : 'ucustomer', component : UserCustomerComponent, children : [
   {path : 'customerDetail', component : UserProfileComponent },
   {path : 'editCustomer/:eid', component : UserProfileUpdateComponent },
    { path : '', redirectTo : 'customerDetail', pathMatch : 'full'}
  ]},
  { path : 'uitems', component : UserItemComponent, children : [
    { path : 'list', component : UserItemListComponent},
    { path : 'restaurantList/:itemName', component : UserItemRestaurantComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'}
  ]},
  { path : 'uorders', component : UserOrderComponent, children : [
    { path : 'list', component : UserOrderListComponent},
    { path : 'orderList/:oid', component : UserOrderDetailsComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'}
  ]},
  { path : 'ubills', component : UserBillComponent, children : [
    { path : 'list', component : UserBillListComponent},
    { path : 'billList/:bid', component : UserBillDetailsComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'}
  ]},

  { path : 'ucarts', component : UserCartComponent, children : [
    { path : 'list', component : UserCartListComponent},
    // { path : 'orderList/:oid', component : UserCartDetailsComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'}
  ]},





]},

























{ path : 'login', component : LoginComponent, children : [
  { path : 'add', component : RegisterFormComponent },
  { path : 'signin', component : LoginFormComponent },
  { path : '', redirectTo : 'signin', pathMatch : 'full'}
] },

  { path : '', redirectTo : 'login/signin' , pathMatch : 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
