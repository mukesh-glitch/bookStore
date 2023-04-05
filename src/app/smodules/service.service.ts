import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private api:HttpClient) { }

get(api:string,params?:any){
  console.log({adapter:'adapter'})
  return this.api.get(api,params)
}

post(api:string,data:any){
 return this.api.post(api,data)
}
}
