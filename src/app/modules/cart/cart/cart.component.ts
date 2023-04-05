import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  quantity: number = 1;
  details: any = [];
  cartBooks: any = [];
  subtotal: number = 0;
  constructor(private cart: CartService) {
    this.details = this.cart.getCartDetails();

    // this.details.quantity =1
    // this.details.totalPrice = this.details.price
    // console.log(({detais:this.details}));
  }

  increment(id: any) {
    var result = this.details
      .filter((data: any) => {
        return data.id == id;
      })
      .map((data: any) => {
        if (!data.quantity) {
          data.quantity = this.quantity;
        } else {
          data.quantity = data.quantity + 1;
        }
        data.totalPrice = data.quantity * data.price;

        return Number(data.price);
      });
    console.log({ result: result });
    this.subtotal += result[0];
    console.log({ detais: this.details });
  }
  decrement(id: any) {
    var result = this.details
      .filter((data: any) => {
        return data.id == id;
      })
      .map((data: any) => {
        if (data.quantity > 0) {
          data.quantity = data.quantity - 1;
          data.totalPrice = data.quantity * data.price;

          return data.price;
        }
      });

    this.subtotal -= result[0];

    console.log({ detais: this.details });
  }
}

