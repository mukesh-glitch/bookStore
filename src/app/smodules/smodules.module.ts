import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './component/btn/btn.component';
import { InputComponent } from './component/input/input.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BtnComponent, InputComponent, NavbarComponent],
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule],
  exports: [BtnComponent, InputComponent,NavbarComponent],
})
export class SmodulesModule {}
