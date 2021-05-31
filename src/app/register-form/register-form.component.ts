import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  msg ='';
  msgPass='';
  successfulMsg="";
  userIdfc : FormControl;
  userNamefc : FormControl;
  passwordfc : FormControl;
  // password2fc : FormControl;
  customerIdfc :  FormControl; 

  loginForm : FormGroup;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private loginService : LoginService, private router : Router,
    private activatedRoute : ActivatedRoute) {
      this.userIdfc = new FormControl(null);
      this.userNamefc = new FormControl(null, [Validators.pattern("[a-zA-Z0-9]{6,12}")]);
      this.passwordfc = new FormControl(null, [Validators.pattern("[a-zA-Z0-9]{8,14}")]);
      // this.password2fc = new FormControl(null, [Validators.pattern("[a-zA-Z0-9]{8,14}")]);
      this.customerIdfc = new FormControl(null , Validators.required);
      
     
        this.loginForm= new FormGroup ({
          userid: this.userIdfc,
          userName : this.userNamefc,
          password : this.passwordfc,
          customerId : this.customerIdfc

        });

    

     };
     /*For adding a new customer*/
  ngOnInit(): void {
    let lid = this.activatedRoute.snapshot.params.lid;
    if (lid) {
      this.loginService.add(lid).subscribe(
        (data) => this.loginForm.setValue(data)
      );
    }
  }
    /*Defining handleSubmit for checking details of the customer*/
    handleSubmit(){
      let obr =null;
      obr=this.loginService.add(this.loginForm.value);
      obr.subscribe(
        (data) => {this.router.navigateByUrl("/login/signin");
          alert("User register successfully");
        },
        (error)=>{
          this.msg= "Bad Credentials , Please enter valid details";
       }
        
      );
    }


}





