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
var sales_invoice_service_1 = require('../service/sales-invoice.service');
var router_1 = require("@angular/router");
var SalesInvoiceComponent = (function () {
    function SalesInvoiceComponent(salesInvoiceService, route) {
        this.salesInvoiceService = salesInvoiceService;
        this.route = route;
        this.title = "Sales Invoices";
    }
    SalesInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var customerId = +params['customerId'];
            _this.salesInvoiceService.getSalesInvoicesByCustomerId(customerId)
                .then(function (salesInvoices) { return _this.salesInvoices = salesInvoices; });
        });
    };
    SalesInvoiceComponent = __decorate([
        core_1.Component({
            selector: 'sales-invoice-app',
            templateUrl: 'app/templates/sales-invoice.html',
            providers: [sales_invoice_service_1.SalesInvoiceService]
        }), 
        __metadata('design:paramtypes', [sales_invoice_service_1.SalesInvoiceService, router_1.ActivatedRoute])
    ], SalesInvoiceComponent);
    return SalesInvoiceComponent;
}());
exports.SalesInvoiceComponent = SalesInvoiceComponent;
//# sourceMappingURL=sales-invoice.component.js.map