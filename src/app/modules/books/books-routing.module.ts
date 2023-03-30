import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [{
  path:'allbooks',
  component:AllbooksComponent
},{
  path:'allbooks/:id',
  component:BookDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
