import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BooksService } from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthService } from '../auth.service';
import { OrdersService } from '../orders/orders.service';
import { SmodulesModule } from 'src/app/smodules/smodules.module';


@NgModule({
  declarations: [
    AllbooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SmodulesModule
  ],providers:[
    BooksService,
    AuthService,
    OrdersService
  ]
})
export class BooksModule { }
