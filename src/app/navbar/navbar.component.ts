import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCartPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../service/cart.service';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
faCart = faCartPlus;
faSearch = faSearch;
faUser = faUser;
public totalItem : number = 0;
public searchTerm !: string;



@Output()searchItem = new EventEmitter

search(input:any){
  console.log(input.value);
  this.searchItem.emit(input.value);
}

constructor(private cartService : CartService, private UserService:UserService){

}

ngOnInit(): void {
this.cartService.getProduct().subscribe((res)=>{
this.totalItem = res.length
})




}

searchItems(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
}



}
