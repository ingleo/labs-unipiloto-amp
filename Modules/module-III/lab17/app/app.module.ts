import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { ProductService } from "./service/product.service";
import { ProductComponent } from './component/product-list.component';
import { AppRoutingModule } from "./routing/app-routing.module";
import { APP_BASE_HREF } from "@angular/common";
1

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  providers: [ProductService,
    {
      provide: APP_BASE_HREF, useValue: '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
