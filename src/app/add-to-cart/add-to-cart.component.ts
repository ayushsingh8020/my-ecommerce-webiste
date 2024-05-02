import { Component, OnInit, Pipe } from '@angular/core';
import { CartService } from '../service/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
faDelete = faTrash;

public totalPrice : number = 0;
public totalItem : number = 0;
public itemQuantity !:number;
public products: any = [];
public grandTotal !: number;



  constructor(private cartService : CartService) {
    const data = localStorage.getItem('products');

    if(data){
      this.products = JSON.parse(data);
    }
    }


    doTotalPrice(){
      let total = 0;
      let quantity = 1
      this.products.forEach((item: { price: number, quantity: number }) => {
        item.quantity = 1;
        total += item.price * item.quantity
      });
      this.totalPrice = total;
      this.itemQuantity = quantity;

    }

    ngOnInit(): void {
  this.cartService.getProduct().subscribe((res)=>{
    this.products = res;
  this.grandTotal = this.cartService.getTotalPrice();
  })


  this.itemQuantity = this.cartService.getProductQuantity();
  this.doTotalPrice();
  // this.doQuantity();
}

    removeItem(item: any){
      this.cartService.removeCartItem(item);
      confirm("are you want to delete your cart item?")
    }
    emptycart(){
      this.cartService.removeAllCart();
      confirm("are you want to empty your cart ?")
    }


}







