import { Injectable } from '@angular/core';
import { SALES_INVOICES } from '../mock/sales-invoice-mock';
import { SalesInvoice } from '../model/sales-invoice';


@Injectable()
export class SalesInvoiceService {

    getSalesInvoices(): Promise<SalesInvoice[]> {
        return Promise.resolve(SALES_INVOICES);
    }

    getSalesInvoicesByCustomerId(customerId: number): Promise<SalesInvoice[]> {
        return this.getSalesInvoices().then(salesInvoices => {
            return salesInvoices.filter(obj => {
                if (obj.customerId === customerId) {
                    return true;
                }
            });
        });
    }
}