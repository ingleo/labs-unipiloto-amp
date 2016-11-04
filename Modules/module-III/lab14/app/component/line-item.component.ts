import { Component, OnInit } from '@angular/core';
import { LineItem } from '../model/line-item';
import { LineItemService } from '../service/line-item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'line-item-app',
    templateUrl: 'app/templates/line-item.html',
    providers: [LineItemService]
})

export class LineItemComponent implements OnInit {

    lineItems: LineItem[];

    constructor(private router: Router, private lineItemService: LineItemService) { };

    ngOnInit(): void{
        this.getLineItems();
    }

    getLineItems() {
        this.lineItemService.getLineItems()
            .then(lineItems => this.lineItems = lineItems)
            .catch(error => console.log(error));
    }
}