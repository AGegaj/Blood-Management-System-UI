import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    FormsModule
  ],
  declarations: [BasicLoginComponent]
})
export class BasicLoginModule { }
