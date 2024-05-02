import { CartService } from '../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { faBucket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kids-wear',
  templateUrl: './kids-wear.component.html',
  styleUrls: ['./kids-wear.component.scss']
})
export class KidsWearComponent  implements OnInit{
  BuyNow = faBucket;
AddtoCart = faShoppingCart;

  productsResponse: any = {
    products: [
      {
        id: 1,
        title: ' Cute Girl Kids Wear',
        description: 'Kids Wear for girls',
        price: 999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Poki',
        category: 'Kids-Wear',
        thumbnail:
          'https://i.pinimg.com/236x/a7/a8/fd/a7a8fd8d35ad7413ada4254de7030ab0.jpg',
        images: [
          'https://i.pinimg.com/236x/a7/a8/fd/a7a8fd8d35ad7413ada4254de7030ab0.jpg',
          'https://i.pinimg.com/236x/a7/a8/fd/a7a8fd8d35ad7413ada4254de7030ab0.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: ' Casual Baby Boy Clothes ',
        description: 'Kids Wear for boys',
        price: 999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Baby Boy',
        category: 'Kids Wear',
        thumbnail:
          'https://i.pinimg.com/564x/63/15/47/631547899e6f0a6d04a2e53079e8c54f.jpg',
        images: [
          'https://i.pinimg.com/564x/63/15/47/631547899e6f0a6d04a2e53079e8c54f.jpg',
          'https://i.pinimg.com/564x/63/15/47/631547899e6f0a6d04a2e53079e8c54f.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Winter Clothes for Boy ',
        description: 'Winter Three-piece clothes for baby boy | Sweater, pant,and woolen-cap',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Suraj Clothes',
        category: 'Kids Wear',
        thumbnail:
          'https://i.pinimg.com/736x/7f/45/0d/7f450d616ef375d2d0cde82eaf8e3278.jpg',
        images: [
          'https://i.pinimg.com/736x/7f/45/0d/7f450d616ef375d2d0cde82eaf8e3278.jpg',
          'https://i.pinimg.com/736x/7f/45/0d/7f450d616ef375d2d0cde82eaf8e3278.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 4,
        title: ' Cute baby girl skirt',
        description: ' Cute Baby Girl Skirt | red Color ',
        price: 949,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Ziggle',
        category: 'Kids Wear',
        thumbnail:
          'https://i.pinimg.com/236x/65/fb/64/65fb64764097a8a650c53b66f8ee3702.jpg',
        images: [
          'https://i.pinimg.com/236x/65/fb/64/65fb64764097a8a650c53b66f8ee3702.jpg',
          'https://i.pinimg.com/236x/65/fb/64/65fb64764097a8a650c53b66f8ee3702.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 5,
        title: ' Baby boy Clothes',
        description: 'Three Piece | Shirt, Sweater and Jeans',
        price: 1399,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Zara Kids',
        category: 'Kids Wear',
        thumbnail:
          'https://i.pinimg.com/564x/e7/09/e3/e709e3a1771b7d28bc7fa351857d4158.jpg',
        images: [
          'https://i.pinimg.com/564x/e7/09/e3/e709e3a1771b7d28bc7fa351857d4158.jpg',
          'https://i.pinimg.com/564x/e7/09/e3/e709e3a1771b7d28bc7fa351857d4158.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 6,
        title: ' Full Sleeve T-Shirt ',
        description: ' Full Sleeve Black T-shirt',
        price: 999,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'topofstyle',
        category: 'topofstyle',
        thumbnail:
          'https://i.pinimg.com/564x/62/cb/68/62cb680d142c47302a3eec575a501ec3.jpg',
        images: [
          'https://i.pinimg.com/564x/62/cb/68/62cb680d142c47302a3eec575a501ec3.jpg',
          'https://i.pinimg.com/564x/62/cb/68/62cb680d142c47302a3eec575a501ec3.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 7,
        title: ' Girls Puff Sleeve Rib Knit Top',
        description: 'Girls Puff Sleeve Rib Knit Top ',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'topofstyle',
        category: 'Kids Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/a2/52/66/a25266a435ccdd89521dcc4ea03c9ce9.jpg',
        images: [
          'https://i.pinimg.com/564x/a2/52/66/a25266a435ccdd89521dcc4ea03c9ce9.jpg',
          'https://i.pinimg.com/564x/a2/52/66/a25266a435ccdd89521dcc4ea03c9ce9.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 8,
        title: ' Girls Puff Sleeve Rib Knit Top ',
        description: ' Girls Puff Sleeve Rib Knit Top | Full Comfortable',
        price: 1199,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'SHIEN Clothes',
        category: 'Kids Wear',
        thumbnail:
          'https://i.pinimg.com/236x/28/d4/34/28d4347fc2c35eb77157b5539487fd8b.jpg',
        images: [
          'https://i.pinimg.com/236x/28/d4/34/28d4347fc2c35eb77157b5539487fd8b.jpg',
          'https://i.pinimg.com/236x/28/d4/34/28d4347fc2c35eb77157b5539487fd8b.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 9,
        title: 'OFF WHITE LONG SHERWANI FOR KIDS',
        description: 'Off white long sherwani with pajama',
        price: 1499,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Fashion Clothes',
        category: 'Fashions Kids Wedding Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/d2/26/c4/d226c44ae5d0b6b6d2bf8f842717db2e.jpg',
        images: [
          'https://i.pinimg.com/564x/d2/26/c4/d226c44ae5d0b6b6d2bf8f842717db2e.jpg',
          'https://i.pinimg.com/564x/d2/26/c4/d226c44ae5d0b6b6d2bf8f842717db2e.jpg',
          'https://cdn.dummyjson.com/product-images/30/3.jpg',
          'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
        ],
      },
      {
        id: 10,
        title: 'Lehenga Set For Girls ',
        description: 'Lehenga Set For Girls ',
        price: 1949,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Aza Fashions',
        category: 'Aza Fashions Kids Wedding Clothes',
        thumbnail:
          'https://i.pinimg.com/564x/c3/6f/0e/c36f0e2a95c80d254d670ecc363ed1ef.jpg',
        images: [
          'https://i.pinimg.com/564x/c3/6f/0e/c36f0e2a95c80d254d670ecc363ed1ef.jpg',
          'https://i.pinimg.com/564x/c3/6f/0e/c36f0e2a95c80d254d670ecc363ed1ef.jpg',
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

