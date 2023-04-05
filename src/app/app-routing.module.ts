import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"",
  redirectTo:"books",
  pathMatch:"full"
},
  {
  path:"auth",
  loadChildren:()=> import('../app/modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:"books",
  loadChildren: ()=> import('../app/modules/books/books.module').then(m=>m.BooksModule)
},{
  path:"my-order",
  loadChildren: ()=>import('../app/modules/orders/orders.module').then(m=>m.OrdersModule)
},{
  path:'cart',
  loadChildren:()=>import('../app/modules/cart/cart.module').then(m=>m.CartModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
