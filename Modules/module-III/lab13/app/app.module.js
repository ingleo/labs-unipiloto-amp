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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./component/app.component');
var page_one_component_1 = require('./component/page-one.component');
var app_routing_module_1 = require("./routing/app-routing.module");
var about_component_1 = require("./component/about.component");
var page_two_component_1 = require("./component/page-two.component");
var home_component_1 = require("./component/home.component");
var common_1 = require("@angular/common");
var product_list_component_1 = require("./component/product-list.component");
var user_list_component_1 = require("./component/user-list.component");
var product_detail_component_1 = require("./component/product-detail.component");
var user_detail_component_1 = require("./component/user-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                page_one_component_1.PageOneComponent,
                page_two_component_1.PageTwoComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                product_list_component_1.ProductListComponent,
                user_list_component_1.UserListComponent,
                product_detail_component_1.ProductDetailComponent,
                user_detail_component_1.UserDetailComponent
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF, useValue: '/'
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map