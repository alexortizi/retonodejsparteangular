import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL='http://localhost:3000/'
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  
  signUp(user){
    return this.http.post<any>(this.URL + 'user/signup',user);
  }
  signIn(user){
    return this.http.post<any>(this.URL + 'user/signin',user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
