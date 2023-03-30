import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  books!: any[];
  email!: string;
  password!: string;
  userData!: any;
  user: any = '';
  constructor(private authApi: AuthService, private router: Router) {}

  login(e: any) {
    e.preventDefault();
    this.userData = {
      email: this.email,
      password: this.password,
    };
    // console.log(this.userData)
    this.authApi.login(this.userData).subscribe((data: any) => {
      if (data.error) {
        alert(data.message);
      } else {
        alert(data.message);
        console.log(data.data);
        let user = data.data;
        localStorage.setItem('profile', JSON.stringify(user));
        this.router.navigate(['/books/allbooks']);
      }
    });
  }
  // Submit(e){
  //   this.data =
  // }
}
