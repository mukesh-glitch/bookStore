import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../smodules/service.service';
@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthService {
  constructor(private http:ServiceService) {}
  rootUrl = 'http://localhost:3000/api';

  // getBooks(){
  //   return this.http.get(this.rootUrl+'/book')
  // }

  auth(data: any) {}
  signUp(data: any) {
    let { email, password, firstName, lastName } = data;
    return this.http.post(this.rootUrl + '/auth/signup', {
      email,
      password,
      firstName,
      lastName,
    });
  }

  login(data: any) {
    let { email, password } = data;
    return this.http.post(this.rootUrl + '/auth/login', { email, password });
  }

  logout(e: any) {
    localStorage.removeItem('profile');
    return false;
  }

  getToken() {
    let user: any = localStorage.getItem('profile');
    user = JSON.parse(user);
    if(user){
      return user.token;
    }else{
      return false
    }
    
  }
}
