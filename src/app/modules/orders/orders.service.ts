import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from 'src/app/smodules/service.service';

@Injectable()
export class OrdersService {
  constructor(private http: ServiceService) {}
  rootUrl = 'http://localhost:3000/api';

  public cartDetails: any = [];
  
  getCartDetails() {
    console.log(this.cartDetails);
    return this.cartDetails;
  }

  ordersDetails(token: any) {
    return this.http.get(this.rootUrl + '/order/myorders');
  }

  addTocart(data: any) {
    this.cartDetails.push(...data);
    console.log('data is', this.cartDetails);
  }
}
