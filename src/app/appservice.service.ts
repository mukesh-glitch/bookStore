import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './modules/auth.service';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService implements HttpInterceptor {

  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
  
    let authtoken = this.auth.getToken()
    if(authtoken){
      let token = req.clone({
        setHeaders:{
          token: authtoken
        }
      })
      console.log(token);
      return next.handle(token)
    }else{
      return next.handle(req)
    }
   
  }
}
