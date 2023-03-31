import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  rootUrl = 'http://localhost:3000/api';

  // getBooks(){
  //   return this.http.get(this.rootUrl+'/book')
  // }

  auth(data:any){

  }
  signUp(data: any) {
    let { email, password, firstName, lastName } = data;
    return this.http.post(this.rootUrl + '/auth/signup', { email,password,firstName,lastName });
    
  }

  login(data:any){
    let {email,password} = data
    return this.http.post(this.rootUrl + '/auth/login', {email,password})
  }

  logout(e:any){
    localStorage.removeItem('profile');
     return false;
  }
  
}
