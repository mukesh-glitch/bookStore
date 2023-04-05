import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MyordersComponent } from './myorders/myorders.component';
import { OrdersService } from './orders.service';

import { BooksService } from '../books/books.service';


@NgModule({
  declarations: [
    MyordersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[
    OrdersService,BooksService
  ]
})
export class OrdersModule { }
