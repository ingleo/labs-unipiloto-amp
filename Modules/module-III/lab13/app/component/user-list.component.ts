import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from "../service/user.service";

@Component({
	selector: 'user-list',
	templateUrl: 'app/templates/user-list.html',
	providers: [UserService]
})

export class UserListComponent implements OnInit{
	title: string = "Usuarios";
	users : User[];

	constructor(private userService : UserService){}

	ngOnInit() {
		this.userService.getUsers()
			.then(users => this.users = users)
			.catch(error => console.log(error));
	}
}