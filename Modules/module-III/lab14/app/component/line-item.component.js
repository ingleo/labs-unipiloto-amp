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
var line_item_service_1 = require('../service/line-item.service');
var router_1 = require('@angular/router');
var LineItemComponent = (function () {
    function LineItemComponent(router, lineItemService) {
        this.router = router;
        this.lineItemService = lineItemService;
    }
    ;
    LineItemComponent.prototype.ngOnInit = function () {
        this.getLineItems();
    };
    LineItemComponent.prototype.getLineItems = function () {
        var _this = this;
        this.lineItemService.getLineItems()
            .then(function (lineItems) { return _this.lineItems = lineItems; })
            .catch(function (error) { return console.log(error); });
    };
    LineItemComponent = __decorate([
        core_1.Component({
            selector: 'line-item-app',
            templateUrl: 'app/templates/line-item.html',
            providers: [line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, line_item_service_1.LineItemService])
    ], LineItemComponent);
    return LineItemComponent;
}());
exports.LineItemComponent = LineItemComponent;
//# sourceMappingURL=line-item.component.js.map