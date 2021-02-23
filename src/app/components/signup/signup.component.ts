import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {AuthService}from '../../services/auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User={
    usuario:'',
    email:'',
    password:''
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res=>{
        console.log(res);
       
        //localStorage save token
        localStorage.setItem('token',res.token);
        alert('Usuario Creado');
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/signin']);
      },
      err=>{
        console.error(err);
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
     
    )
  }
}
