import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { User } from '../../model/user';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  users: User[];

  constructor(public navCtrl: NavController, private userService: UserService) { }

  ionViewDidLoad() {
    console.log('Hello UserPage Page');
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
}
