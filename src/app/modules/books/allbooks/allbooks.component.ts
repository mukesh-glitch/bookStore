import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
})
export class AllbooksComponent {
  books: any;
  user: any;
  userToken: any;
  singleBook: any;
  constructor(
    private bookApi: BooksService,
    private auth: AuthService,
    private router: Router
  ) {
    this.bookApi.getBooks().subscribe((result: any) => {
      console.log({fromBooks:result});
      
      if (result.error) {
        alert(result.message);
      } else {
        this.books = result.data.books;
     
      }
    });
  }

  getToken(){
    this.user = this.auth.getToken()
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

  allDetail(id: any) {
    this.bookApi.singleBook(id).subscribe((result: any) => {
      this.singleBook = result.data.book;
    });
  }

  logout(e: any) {
    this.userToken = this.auth.logout(e);
  }

  buynow(data: any) {
    // console.log({book:data})
    // let book = {};
    let buy = this.bookApi.buynow(
      { bookId: data.id, quantity: 1 }
    );
  }
}
