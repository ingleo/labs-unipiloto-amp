"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../service/user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.title = "Add User";
        this.title2 = "User List";
        this.newUser = { id: 0, email: "", password: "", firstname: "", lastname: "", phone: "" };
    }
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.add = function (newUser) {
        var _this = this;
        this.userService.create(newUser)
            .subscribe(function (user) {
            _this.users.push(user);
            _this.selected = null;
        });
    };
    UserComponent.prototype.onSelect = function (user) {
        this.selected = user;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-list-app',
            templateUrl: 'app/templates/user-list.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user-list.component.js.map