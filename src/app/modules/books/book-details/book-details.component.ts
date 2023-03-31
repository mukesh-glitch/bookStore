import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  id: any;
bookDetail:any;
user:any;
  constructor(private bookApi: BooksService, private route: ActivatedRoute,private nav:Router) {
    let token: any = localStorage.getItem('profile');
    this.user = JSON.parse(token);
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
buy(data:any){
  if(this.user?.token){
    let buy = this.bookApi.buynow(
      { bookId: data.id, quantity: 1 },
      this.user.token
    );
  }else{

this.nav.navigate(['/auth/login'])
  }


}
}
