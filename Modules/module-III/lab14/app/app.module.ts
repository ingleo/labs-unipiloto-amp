import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component/app.component';
import { AppRoutingModule } from "./routing/app-routing.module";
import { APP_BASE_HREF } from "@angular/common";

import { CustomerComponent } from "./component/customer-list.component";
import { SalesInvoiceComponent } from './component/sales-invoice.component';
import { LineItemComponent } from './component/line-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CustomerComponent,
        SalesInvoiceComponent,
        LineItemComponent
    ],
    providers: [
        {
            provide: APP_BASE_HREF, useValue: '/'
        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
