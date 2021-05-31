import { Component,  OnInit, ɵsetCurrentInjector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  msg ='';
  userNamefc : FormControl;
  passwordfc : FormControl;
  customerId : number;

  loginForm : FormGroup;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private loginService : LoginService, private router : Router, private customerService:CustomerService,
    private activatedRoute : ActivatedRoute) {

      this.userNamefc = new FormControl(null, [Validators.required,Validators.pattern("[a-zA-Z0-9]{6,12}")]);
      this.passwordfc = new FormControl(null, [Validators.required,Validators.pattern("[a-zA-Z0-9]{6,14}")]);
      
      this.loginForm= new FormGroup ({
        userName : this.userNamefc,
        password : this.passwordfc,

      });

     };

  /*For signing in operation*/
  ngOnInit(): void {
    let lid = this.activatedRoute.snapshot.params.lid;
    if (lid) {
      this.loginService.singIn(this.loginForm.value).subscribe(
        
        (data) => this.loginForm.setValue(data)
      
      );
    }
  }

    /*To verify the credentials entered by the user are correct or not*/
    handleSubmit(){
      
      this.loginService.singIn(this.loginForm.value).subscribe(
      (data) => {
        this.loginService.currentCustomer=data;
        console.log(this.loginService.currentCustomer);
        if(this.loginService.currentCustomer.customerId!=111){
        this.router.navigateByUrl("/userHeader/dashboard");
        }
        else{
          this.router.navigateByUrl("/header/dashboard");
        }

      },
        (error)=>{
          this.msg= "Bad Credentials , Please enter valid email and password";
       });
    }

}
