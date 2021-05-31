import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CartComponent } from './cart/cart.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsgboxComponent } from './msgbox/msgbox.component';
import { BillComponent } from './bill/bill.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CategoryComponent } from './category/category.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { ItemComponent } from './item/item.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserRestaurantComponent } from './user-restaurant/user-restaurant.component';
import { UserRestaurantIdComponent } from './user-restaurant-id/user-restaurant-id.component';
import { UserRestaurantListComponent } from './user-restaurant-list/user-restaurant-list.component';
import { UserCustomerComponent } from './user-customer/user-customer.component';
import { UserProfileUpdateComponent } from './user-profile-update/user-profile-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserItemListComponent } from './user-item-list/user-item-list.component';
import { UserItemRestaurantComponent } from './user-item-restaurant/user-item-restaurant.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { UserBillListComponent } from './user-bill-list/user-bill-list.component';
import { UserBillDetailsComponent } from './user-bill-details/user-bill-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCartListComponent } from './user-cart-list/user-cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    DashboardComponent,
    MsgboxComponent,
    BillComponent,
    BillFormComponent,
    BillListComponent,
    CategoryComponent,
    CatFormComponent,
    CatListComponent,
    CartComponent,
    CartFormComponent,
    CartListComponent,
    ItemComponent,
    ItemFormComponent,
    ItemListComponent,
    OrderFormComponent,
    OrderListComponent,
    OrderComponent,
    RestaurantFormComponent,
    RestaurantListComponent,
    RestaurantComponent,
    LoginComponent,
    RegisterFormComponent,
    LoginFormComponent,
    UserHeaderComponent,
    UserRestaurantComponent,
    UserRestaurantIdComponent,
    UserRestaurantListComponent,
    UserCustomerComponent,
    UserProfileUpdateComponent,
    UserProfileComponent,
    UserItemComponent,
    UserItemListComponent,
    UserItemRestaurantComponent,
    UserOrderComponent,
    UserOrderListComponent,
    UserOrderDetailsComponent,
    UserBillComponent,
    UserBillListComponent,
    UserBillDetailsComponent,
    UserCartComponent,
    UserCartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
