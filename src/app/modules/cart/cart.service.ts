import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor() { 
    
  }
  private cartDetails:any =[];

  
  getCartDetails(){
    return this.cartDetails
  }

  addTocart(data: any) {
    this.cartDetails.push(data);
    console.log('from cart service', this.cartDetails);
    return this.cartDetails
  }
}
