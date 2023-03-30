import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}
  rootUrl = 'http://localhost:3000/api';

    getBooks(){
    return this.http.get(this.rootUrl+'/book')
  }

  singleBook(id:any){
    return this.http.get(this.rootUrl+`/book/detail/${id}`)

  }
  
}
