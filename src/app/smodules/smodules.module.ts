import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './component/btn/btn.component';
import { InputComponent } from './component/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BtnComponent, InputComponent],
  imports: [CommonModule,FormsModule],
  exports: [BtnComponent, InputComponent],
})
export class SmodulesModule {}
