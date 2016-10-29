import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
	selector: 'user-list',
	templateUrl: 'app/templates/user-list.html',
	providers: [UserService]
})

export class UserListComponent implements OnInit{
	title: string = "Usuarios";
	users : User[];
	selected: User;

	constructor(private router: Router, private userService : UserService){}

	getUsers() {
		this.userService.getUsers()
			.then(users => this.users = users)
			.catch(error => console.log(error));
	}

	ngOnInit(): void {
		this.getUsers();
	}

	onSelect(user: User) {
		this.selected = user;
	}

	gotoDetail(): void {
		this.router.navigate(['user/detail/', this.selected.id]);
	}
}