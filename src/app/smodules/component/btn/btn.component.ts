import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
@Input() type:any;

@Output() userData = new EventEmitter<any>

// onSubmit(value){
//   this.userData.emit(value)
// }
}
