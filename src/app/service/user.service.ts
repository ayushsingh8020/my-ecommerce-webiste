import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import {SignUp, Login}from '../user-login'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  // isLoginError = new EventEmitter<boolean>(false);
  // isSignUpError = new EventEmitter<boolean>(false);
  //   constructor(private http:HttpClient, private router: Router) { }

  //   userSignUp(data:SignUp){
  //   this.http.post("'https://dummyjson.com/products",data,
  //  {observe: 'response'}).subscribe((res)=>{
  //    this.isSellerLoggedIn.next(true )
  //    localStorage.setItem('seller', JSON.stringify(res.body) )
  //    this.router.navigate(['/'])

  //    console.log(res, 'res');


  //  })
  //  }

  //  reloadSeller(){
  // if(localStorage.getItem('seller')){
  //   this.isSellerLoggedIn.next(true),
  //   this.router.navigate(['/user-login-page'])
  // }
  //  }

  //  userLogin(data:Login){
  // console.log(data);

  // }
}
