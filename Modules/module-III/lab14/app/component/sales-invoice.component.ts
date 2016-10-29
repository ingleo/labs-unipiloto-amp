import { Component, OnInit } from '@angular/core';
import { SalesInvoice } from '../model/sales-invoice';
import { SalesInvoiceService } from '../service/sales-invoice.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: 'sales-invoice-app',
	templateUrl: 'app/templates/sales-invoice.html',
	providers: [SalesInvoiceService]
})

export class SalesInvoiceComponent implements OnInit {
    sales_invoice: SalesInvoice;

    constructor(private salesInvoiceService: SalesInvoiceService,
        private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let customerId =+params['customerId'];
            this.salesInvoiceService.getSalesInvoicesByCustomerId(customerId)
                .then(salesInvoices => this.sales_invoice = salesInvoices);
        });
    }
}