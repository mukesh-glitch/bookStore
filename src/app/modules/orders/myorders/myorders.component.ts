import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent {
  data: any;
  constructor(private orderApi: OrdersService) {
    this.data = localStorage.getItem('profile');
    let token = JSON.parse(this.data);
    console.log(token.token);

    this.orderApi.ordersDetails(token.token).subscribe((result: any) => {
      console.log(result);
    });
  }
}
