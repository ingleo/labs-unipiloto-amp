import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

    private usersURI = 'http://138.68.0.83:7070/api/v1/user/';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(this.usersURI + 'list')
            //cuando se usa in-memory-web-api se hace response.json().data  
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }

    update(user: User): Observable<User> {
        const url = `${this.usersURI}update/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .map(() => user)
            .catch(this.handleError); 
    }

    create(user: User): Observable<User> {

        alert(user.email+user.password+user.firstname+user.lastname+user.phone);
        return this.http
            .post(this.usersURI + 'sign-up',
            JSON.stringify({
                email: user.email,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone
            }),
            { headers: this.headers })
            .map(result => result.json)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}