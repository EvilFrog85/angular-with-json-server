import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

import { User } from '../users/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    backendURL: string = 'http://localhost:4300';

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.backendURL + '/users').pipe( catchError(this.errorHandler) );
    }
    deleteUser(userId: number) {
        return this.http.delete(this.backendURL + '/users/' + userId).pipe( catchError(this.errorHandler) );
    }
    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
