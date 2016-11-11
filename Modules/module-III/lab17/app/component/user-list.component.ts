import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
    selector: 'user-list-app',
    templateUrl: 'app/templates/user-list.html'
})

export class UserComponent {

    title: string = "Add User";
    title2: string = "User List"
    users: User[];
    newUser: User = { id: 0, email: "", password: "", firstname: "", lastname: "", phone: "" };
    selected: User;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },
            error => {
                console.log(error);
            }
            );
    }

    add(newUser: User) {

        this.userService.create(newUser)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
    }

}