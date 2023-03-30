import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SmodulesModule } from 'src/app/smodules/smodules.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SmodulesModule,
    FormsModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
