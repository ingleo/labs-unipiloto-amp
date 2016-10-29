import { Component, Input } from '@angular/core';
import { User } from '../model/user';
import {USERS} from "../mock/user-mock";

@Component({
	selector: 'user-list',
	templateUrl: 'app/templates/user-list.html'
})

export class UserListComponent {
	title: string = "Usuarios";

	users: User[] = USERS;
	
}