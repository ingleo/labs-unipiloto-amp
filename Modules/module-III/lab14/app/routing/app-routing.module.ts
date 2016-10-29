import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomerComponent } from "../component/customer-list.component";
import { SalesInvoiceComponent } from "../component/sales-invoice.component";


const routes: Routes = [
    { path: '', redirectTo: '/customer-list', pathMatch: 'full' },
    { path: 'customer-list', component: CustomerComponent },
    { path: 'sales-invoice/list/:customerId', component: SalesInvoiceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }