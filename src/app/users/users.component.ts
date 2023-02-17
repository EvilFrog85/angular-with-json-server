import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { UserService } from '../services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users$: Observable<Array<User>>;

    constructor(
        private userService: UserService
    ) {
        this.users$ = this.userService.getUsers();
    }
    
    ngOnInit():void {}

    deleteUser(id: number) {
        this.userService.deleteUser(id).pipe(take(1)).subscribe( res => {
            console.log(res);
        });
    }
}
