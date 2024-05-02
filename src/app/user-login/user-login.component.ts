import { Component, OnInit } from '@angular/core';
import { SignUp } from '../user-login';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router :Router){ }

  ngOnInit(): void {
  }

 SignUp(data: SignUp){
  console.log(data);
 }

 signup(name:string, email: string , password:any ){
  if(name === name && email === email && password === password ){
localStorage.setItem('isSignUped', 'true')
alert('Sign Successfull ✔✔✔ ')
this.router.navigate(['product'])
  }
  else{
    localStorage.setItem('isSignUped', 'false')
    alert('Sign Up First' )
    this.router.navigate(['user-sign-up-page'])
  }
  }


}
