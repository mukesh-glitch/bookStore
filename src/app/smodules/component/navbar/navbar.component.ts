import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/auth.service';
import { BookDetailsComponent } from 'src/app/modules/books/book-details/book-details.component';
import { CartService } from 'src/app/modules/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // cartQuantity: any =0;
  token:any = false
  quantity: any = 0;
  constructor(private cart: CartService,private auth:AuthService) {
    this.token = auth.getToken()
  }


  logout(e:any){
   this.token= this.auth.logout(e)
    
  }
  
  cartQuantity(){
    return this.quantity = this.cart.getCartDetails().length;

  }
}
