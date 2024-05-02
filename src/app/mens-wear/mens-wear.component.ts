import { CartService } from '../service/cart.service';
import { faBucket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.scss'],
})
export class MensWearComponent implements OnInit {
  BuyNow = faBucket;
AddtoCart = faShoppingCart;


  productsResponse: any = {
    products: [
      {
        id: 1,
        title: 'T-Shirt MAN',
        description: 'Under Armour T-Shirt',
        price: 3399,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Under-Armour',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/2c/e5/24/2ce52407aee5ae7107fc9664346eb3a7.jpg',
        images: [
          'https://i.pinimg.com/564x/2c/e5/24/2ce52407aee5ae7107fc9664346eb3a7.jpg',
          'https://i.pinimg.com/564x/2c/e5/24/2ce52407aee5ae7107fc9664346eb3a7.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: 'Sleeve-less T-Shirt For Man',
        description: 'GYM T-Shirt',
        price: 1299,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Gucci',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/aa/a1/b1/aaa1b16f0cf60757258be552d168c1e1.jpg',
        images: [
          'https://i.pinimg.com/564x/aa/a1/b1/aaa1b16f0cf60757258be552d168c1e1.jpg',
          'https://i.pinimg.com/564x/aa/a1/b1/aaa1b16f0cf60757258be552d168c1e1.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: ' Man  Formal Trouser',
        description: 'Formal Trouser for Man',
        price: 1599,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Father & Sons',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/736x/80/d3/41/80d341187c52d67df80e8bc0c0728e90.jpg',
        images: [
          'https://i.pinimg.com/736x/80/d3/41/80d341187c52d67df80e8bc0c0728e90.jpg',
          'https://i.pinimg.com/736x/80/d3/41/80d341187c52d67df80e8bc0c0728e90.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 4,
        title: ' Man  Formal Shirt',
        description: 'Formal Shirt',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Father & Sons',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/0d/33/47/0d334745bff9dd2b87bea857ff4b7cd9.jpg',
        images: [
          'https://i.pinimg.com/564x/0d/33/47/0d334745bff9dd2b87bea857ff4b7cd9.jpg',
          'https://i.pinimg.com/564x/0d/33/47/0d334745bff9dd2b87bea857ff4b7cd9.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 5,
        title: ' Man  Formal Shirt',
        description: 'Formal Shirt',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Father & Sons',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/b2/29/d9/b229d9e83db675bb14c23bd7c142d931.jpg',
        images: [
          'https://i.pinimg.com/564x/b2/29/d9/b229d9e83db675bb14c23bd7c142d931.jpg',
          'https://i.pinimg.com/736x/3d/0c/93/3d0c9319fb8b6fd2a08c669e9120e753.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 6,
        title: '  T-Shirt ',
        description: ' UnderArmour T-shirt Round Neck',
        price: 3199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Under_Armour',
        category: 'UnderArmour Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/28/85/74/288574970a4064d5631bec8af1a164ea.jpg',
        images: [
          'https://i.pinimg.com/564x/28/85/74/288574970a4064d5631bec8af1a164ea.jpg',
          'https://i.pinimg.com/564x/28/85/74/288574970a4064d5631bec8af1a164ea.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 7,
        title: ' Man  Gym Shorts',
        description: 'Gym Outfit ',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Puma',
        category: 'Gym Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/7b/da/05/7bda0547afe32a613753d8f64efaad77.jpg',
        images: [
          'https://i.pinimg.com/564x/7b/da/05/7bda0547afe32a613753d8f64efaad77.jpg',
          'https://i.pinimg.com/736x/3d/0c/93/3d0c9319fb8b6fd2a08c669e9120e753.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 8,
        title: 'Tracksuit ',
        description: 'Gym Tracksuit for men | Full Comfortable',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Father & Sons',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/40/c5/5f/40c55f905956ec697eb409d44587eac1.jpg',
        images: [
          'https://i.pinimg.com/564x/40/c5/5f/40c55f905956ec697eb409d44587eac1.jpg',
          'https://i.pinimg.com/564x/40/c5/5f/40c55f905956ec697eb409d44587eac1.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 9,
        title: 'Casual  T-Shirt',
        description: 'Man Casual  T-Shirt V-Necks',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Father & Sons',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/98/79/94/987994c6a2025de4c10634770b0bceee.jpg',
        images: [
          'https://i.pinimg.com/564x/98/79/94/987994c6a2025de4c10634770b0bceee.jpg',
          'https://i.pinimg.com/564x/98/79/94/987994c6a2025de4c10634770b0bceee.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 10,
        title: 'Casual T-shirts Man',
        description: 'Casual T-Shirt for Summer Time',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'UnderArmour',
        category: 'UnderArmour Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/a3/ee/74/a3ee74578c1a5f22916fad130329ac95.jpg',
        images: [
          'https://i.pinimg.com/564x/a3/ee/74/a3ee74578c1a5f22916fad130329ac95.jpg',
          'https://i.pinimg.com/736x/3d/0c/93/3d0c9319fb8b6fd2a08c669e9120e753.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 11,
        title: ' Man  Sport Shoes',
        description: 'Under Armour Shoes For Men',
        price: 10499,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'UnderArmour',
        category: 'Shoes Under Armour Shoes',
        thumbnail:
          'https://www.underarmour.in/media/catalog/product/cache/fe00ef9a43201311b84f219ced64b808/3/0/3027344-001-9-120240304164732987.jpg',
        images: [
          'https://www.underarmour.in/media/catalog/product/cache/fe00ef9a43201311b84f219ced64b808/3/0/3027344-001-9-120240304164732987.jpg',
          'https://www.underarmour.in/media/catalog/product/cache/fe00ef9a43201311b84f219ced64b808/3/0/3027344-001-9-120240304164732987.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 12,
        title: '  Formal Suit',
        description: 'Formal Suit For Men',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Gucci',
        category: 'Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/8b/82/cf/8b82cf21c2c8ee0ff70b99923623767d.jpg',
        images: [
          'https://i.pinimg.com/564x/8b/82/cf/8b82cf21c2c8ee0ff70b99923623767d.jpg',
          'https://i.pinimg.com/564x/8b/82/cf/8b82cf21c2c8ee0ff70b99923623767d.jpg',
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

constructor(private CartService: CartService){}

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
