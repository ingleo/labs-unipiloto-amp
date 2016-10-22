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
var AppComponent = (function () {
    function AppComponent() {
        this.product = {
            id: 1,
            name: "Galaxy S7",
            description: "Granada de mano",
            type: "smartphone",
            price: 500000,
            quantity: 10
        };
        this.user = {
            id: 1,
            name: "Leonardo",
            address: "calle 123",
            phone: 1234566
        };
        //creación de una variable de tipo arreglo de productos y un titulo 
        this.title = "Mis productos";
        this.products = PRODUCTS;
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /*template: '<h1>{{product.id}}</h1><br />' +
                      '<h2>{{product.name}}</h2><br />' +
                      '<h2>{{product.description}}</h2><br />' +
                      '<h2>{{product.type}}</h2><br />' +
                      '<h2>{{product.price}}</h2><br />' +
                      '<h2>{{product.quantity}}</h2><br />' +
                  '<br />' +
                  '<h2>{{user.name}}</h2><br />' +
                  '<h2>{{user.id}}</h2><br />' +
                  '<h2>{{user.address}}</h2><br />'+
                  '<h2>{{user.phone}}</h2><br />'
              */
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Arreglo de objetos de producto
var PRODUCTS = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 30
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 3500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 2500000,
        quantity: 10
    }
];
//Arreglo de objetos de usuario
var USERS = [
    {
        id: 1,
        name: "Leonardo",
        address: "calle 123",
        phone: 1234566
    },
    {
        id: 2,
        name: "Carlos",
        address: "calle 456",
        phone: 876543
    }
];
//# sourceMappingURL=app.component.js.map