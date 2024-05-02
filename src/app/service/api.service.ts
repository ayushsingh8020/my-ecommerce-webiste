import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts: any;

  getProduct(){
    return this.http.get('https://fakestoreapi.com/products/').pipe(map((res:any)=>{
 return res;
    }))
  }


}
