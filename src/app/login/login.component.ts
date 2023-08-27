import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
activeuser=true;
signupusername:string
signuppassword:string;
loginusername:string;
loginpassword:string;
  constructor(private crudservice:CrudserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    console.log("register ")
    this.activeuser=false
  }
  signup(){
    this.crudservice.signup(this.signupusername,this.signuppassword).subscribe((res:any)=>{
      console.log(res.message)
      if(res.message=="User created!"){
        this.activeuser=true
        alert("User Created Succesfully! please login to start using the application")
      }
    },(error)=>{
      alert("user already exists please try to login")
      this.activeuser=true
    })

  }
  login(){
this.crudservice.login(this.loginusername,this.loginpassword).subscribe((res:any)=>{
  
  sessionStorage.setItem("token",res.token)
  sessionStorage.setItem("active","true")

  this.router.navigate(['/notes'])
})
  }

}
