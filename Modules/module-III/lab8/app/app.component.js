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
var Ride = (function () {
    function Ride() {
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.ride = {
            festive: 1900,
            airport: 3900,
            app_pip: 700,
            units: 50,
            default: 4100,
        };
        this.title = "Mi viaje";
        this.total = this.getTotal(this.ride);
        this.title = "Mi viaje";
    }
    AppComponent.prototype.getTotal = function (ride) {
        var unitCost;
        var MIN_UNITS = 50;
        var DEF_VALUE = 4100;
        if (ride.units <= MIN_UNITS) {
            unitCost = DEF_VALUE;
        }
        else {
            unitCost = (ride.units * DEF_VALUE) / MIN_UNITS;
        }
        this.ride.default = unitCost;
        this.total = Number(ride.festive) + Number(ride.airport) + Number(ride.app_pip) + unitCost;
        return this.total;
        console.log('XXXXX ' + this.total);
        return this.total;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/ride.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map