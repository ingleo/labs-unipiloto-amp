import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { Observable } from 'rxjs/Rx';


/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  private usersURI = 'http://138.68.0.83:7070/api/v1/user/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  getUsers(): Observable<User[]>{
    console.log('LLEGA A SERVICE');
     return this.http.get(this.usersURI + 'list')
      //cuando se usa in-memory-web-api se hace response.json().data  
      .map(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

}
