import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  email!: string;
  password!: string;
  FirstName!: string;
  LastName!: string;
  userData: any;

  constructor(private authApi: AuthService) {}

  signup(e: any) {
    e.preventDefault();
    this.userData = {
      email: this.email,
      password: this.password,
      firstName: this.FirstName,
      lastName: this.LastName,
    };
    this.authApi.signUp(this.userData).subscribe((data:any) => {
      if(data.error){
        alert(data.message)
      }else{
        alert(data.message)
      }
    });
  }
}
