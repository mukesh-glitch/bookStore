import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MyordersComponent } from './myorders/myorders.component';
import { OrdersService } from './orders.service';


@NgModule({
  declarations: [
    MyordersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[
    OrdersService
  ]
})
export class OrdersModule { }
