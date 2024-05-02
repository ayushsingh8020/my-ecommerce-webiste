import { Component, OnInit } from '@angular/core';
import { Login } from '../user-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router){}

  ngOnInit(): void {

  }

  Login(data: Login){
    console.log(data);
   }

   login(email:string, password: any){

  if(email === email && password == password  ){
    localStorage.setItem('islogggedIn', "true");
    alert("loggin  ")
  }else{
    localStorage.setItem("isloggedIn"," false");
    alert("first login ")
    this.router.navigate(['user-sign-up-page'])
  }
}

}
