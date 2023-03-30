import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  id: any;
bookDetail:any;
  constructor(private bookApi: BooksService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookApi.singleBook(this.id).subscribe((result: any) => {
      if (result.error) {
        alert(result.message);
      } else {
        console.log(result)
        this.bookDetail= result.data.book[0]
        console.log(this.bookDetail)
      }
    });
  }
}
