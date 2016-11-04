import { Injectable } from '@angular/core';
import { LINE_ITEMS } from '../mock/line-item-mock';
import { LineItem } from '../model/line-item';


@Injectable()
export class LineItemService {

    getLineItems(): Promise<LineItem[]> {
        return Promise.resolve(LINE_ITEMS);
    }

    getLineItemsBySalesInvoiceId(salesInvoiceId: number): Promise<LineItem[]> {
        return this.getLineItems().then(lineItems => {
            return lineItems.filter(obj => {
                if(obj.salesInvoiceId === salesInvoiceId){
                    return true;
                }
            })
        })
    }

    getLineItemsByProductId(productId: number): Promise<LineItem[]> {
        return this.getLineItems().then(lineItems => {
            return lineItems.filter(obj => {
                if(obj.productId === productId){
                    return true;
                }
            })
        })
    }
}