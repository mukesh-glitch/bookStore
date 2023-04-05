import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from 'src/app/smodules/service.service';

@Injectable()
export class BooksService {
  constructor(private http: ServiceService) {}
  rootUrl = 'http://localhost:3000/api';

  getBooks() {
    return this.http.get(this.rootUrl + '/book');
  }

  singleBook(id: any) {
    return this.http.get(this.rootUrl + `/book/detail/${id}`);
  }

  buynow(data: any, ) {
    let books = [];
    books.push(data);
    return this.http
      .post(this.rootUrl + `/order/initOrder`, { books })
      .subscribe((result: any) => {
        if (result.error) {
          alert(result.message);
        } else {
          let payment = result.data.paymentLink;
          console.log(payment);
          // this.router.navigateByUrl(payment)
          window.location.href = payment;
        }
    });
  }
}
