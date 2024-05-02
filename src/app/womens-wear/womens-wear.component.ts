import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-womens-wear',
  templateUrl: './womens-wear.component.html',
  styleUrls: ['./womens-wear.component.scss']
})
export class WomensWearComponent implements OnInit {
AddtoCart = faShoppingCart
BuyNow = faShoppingBasket

  productsResponse: any = {
    products: [
      {
        id: 1,
        title: ' Women Kurti',
        description: 'Cotton Kurti',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Kadai Clothes',
        category: " Women's Wear",
        thumbnail:
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
        images: [
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: ' Patiala For Women',
        description: 'Womens  Green Zari Work Patiala Set',
        price: 2999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Kadai Clothes',
        category: " Women's Wear",
        thumbnail:
          'https://i.pinimg.com/236x/fa/c2/f9/fac2f96fcd7f5be30e9b327fd6176ca4.jpg',
        images: [
          'https://i.pinimg.com/236x/fa/c2/f9/fac2f96fcd7f5be30e9b327fd6176ca4.jpg',
          'https://i.pinimg.com/236x/fa/c2/f9/fac2f96fcd7f5be30e9b327fd6176ca4.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Georgette Sarees',
        description: 'Georgette sarees are a popular collection of traditional Indian garments.',
        price: 4999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Georgette Sarees',
        category: " Women's Wear",
        thumbnail:
          'https://i.pinimg.com/564x/57/0c/d4/570cd45121d1942fe15e3c89bb17c816.jpg',
        images: [
          'https://i.pinimg.com/564x/57/0c/d4/570cd45121d1942fe15e3c89bb17c816.jpg',
          'https://i.pinimg.com/564x/57/0c/d4/570cd45121d1942fe15e3c89bb17c816.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 4,
        title: ' Lehenga Choli',
        description: 'Bridal Lenga',
        price: 34000,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Arihant Textiles',
        category: " Women's Wear",
        thumbnail:
          'https://i.pinimg.com/564x/42/40/a5/4240a59298449d2b1db9e42487a11229.jpg',
        images: [
          'https://i.pinimg.com/564x/42/40/a5/4240a59298449d2b1db9e42487a11229.jpg',
          'https://i.pinimg.com/564x/42/40/a5/4240a59298449d2b1db9e42487a11229.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 5,
        title: ' Women Kurti',
        description: 'Cotton Kurti',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Kadai Clothes',
        category: " Women's Wear",
        thumbnail:
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
        images: [
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
          'https://i.pinimg.com/564x/83/2d/f2/832df2e7026969c727912e3e9a152d05.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 6,
        title: ' Women Casual Shoes',
        description: 'Comformatable Casual shoes for women',
        price: 1999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Adidas',
        category: " Women's  Footwear",
        thumbnail:
          'https://i.pinimg.com/564x/46/29/4e/46294ee9fed732747ed32e45a70f0f5e.jpg',
        images: [
          'https://i.pinimg.com/564x/46/29/4e/46294ee9fed732747ed32e45a70f0f5e.jpg',
          'https://i.pinimg.com/564x/46/29/4e/46294ee9fed732747ed32e45a70f0f5e.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id:7,
        title: ' Without-less shoes ',
        description: 'Comformatable Casual shoes for women',
        price: 2499,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'BALENCIAGA',
        category: " Women's  Footwear",
        thumbnail:
          'https://i.pinimg.com/564x/91/bf/6c/91bf6c7a0949ecbaabfee0ad1c06b77b.jpg',
        images: [
          'https://i.pinimg.com/564x/91/bf/6c/91bf6c7a0949ecbaabfee0ad1c06b77b.jpg',
          'https://i.pinimg.com/564x/91/bf/6c/91bf6c7a0949ecbaabfee0ad1c06b77b.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },


    ],
    total: 100,
    skip: 0,
    limit: 30,
  };

  allProducts: any = [];
  products: any = [];

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    console.log(this.productsResponse);
    this.allProducts = this.productsResponse.products;
    this.products = JSON.parse(JSON.stringify(this.allProducts));
    console.log(this.allProducts);
  }

  searchItem(query: any) {
    console.log(query);
    // map, filter, reduce (copy banante hain)
    // forEach (original ko ched dega)
    this.products = this.allProducts.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
    });
  }



  addtocart(product : any){
    this.CartService.addtoCart(product)

      }
}
