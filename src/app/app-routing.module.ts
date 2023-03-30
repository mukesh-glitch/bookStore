import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"auth",
  loadChildren:()=> import('../app/modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:"books",
  loadChildren: ()=> import('../app/modules/books/books.module').then(m=>m.BooksModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
