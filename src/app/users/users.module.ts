import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
