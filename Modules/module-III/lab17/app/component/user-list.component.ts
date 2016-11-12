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
    newUser: User;
    selected: User;
    users: User[];

    constructor(private userService: UserService) {

        this.newUser = { id: 0, email: "", password: "", firstname: "", lastname: "", phone: "" };
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

    ngOnInit(): void {
        this.getUsers();
    }

    add(newUser: User) {

        this.userService.create(newUser)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
    }

    onSelect(user: User){
        this.selected = user;
    }
}