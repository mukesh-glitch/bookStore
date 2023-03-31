import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [{
  path:'',
  component:MyordersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
