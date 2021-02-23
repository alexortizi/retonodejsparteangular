import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {AuthService}from '../../services/auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User={
    usuario:'',
    email:'',
    password:''
  }
  isSuccessful:boolean = false;
  isSignInFailed:boolean = false;
  errorMessage:String = '';
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res=>{
        console.log(res);
       
        //localStorage save token
        localStorage.setItem('token',res.token);
        this.isSuccessful = true;
        this.isSignInFailed = false;
        this.router.navigate(['/personas']);
      },
      err=>{
        console.error(err);
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isSignInFailed = true;
      }
    )
  }

}
