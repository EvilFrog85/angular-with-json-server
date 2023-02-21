import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { UserService } from '../services/user.service';
import { User } from './user.model';

import { faTrashAlt, faEdit, faSave, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    faSave = faSave;
    faAdd = faPlus;

    showUserAdd: boolean = false;
    showUserEdit: boolean = false;

    newUserData: User = {
        firstName: '',
        lastName: '',
        occupation: ''
    };
    editUserData: User = {
        id: 0,
        firstName: '',
        lastName: '',
        occupation: '',
        age: 0
    };

    users$: Observable<Array<User>>;

    constructor(
        private userService: UserService
    ) {
        this.users$ = this.userService.getUsers();
    }

    ngOnInit(): void { }

    deleteUser(id: number) {
        this.userService.deleteUser(id).pipe(take(1)).subscribe(res => {
            this.users$ = this.userService.getUsers();
        });
    }

    toggleAddUser() {
        this.showUserAdd = !this.showUserAdd;
    }

    createUser(userData: User) {
        this.userService.addUser(userData).pipe(take(1)).subscribe(res => {
            this.users$ = this.userService.getUsers();
        });
    }

    toggleEditUser(user: User) {
        this.showUserEdit = this.showUserEdit ? user.id !== this.editUserData.id : true;
        this.editUserData = user;
    }

    editUser(editUserData: User) {
        this.userService.editUser(editUserData).pipe(take(1)).subscribe(res => {
            console.log( res );
            this.showUserEdit = false;
        });
    }
}
