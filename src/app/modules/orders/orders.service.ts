import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}
  rootUrl = 'http://localhost:3000/api';

ordersDetails(token:any){
  let headers = new HttpHeaders({
    'token':token
  })

return this.http.get(this.rootUrl+'/order/myorders',{headers: headers})
}

}
