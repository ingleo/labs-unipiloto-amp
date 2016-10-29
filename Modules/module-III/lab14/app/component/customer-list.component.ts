import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'customer-app',
    templateUrl: 'app/templates/customer-list.html',
    providers: [CustomerService]
})

export class CustomerComponent implements OnInit{
    title = 'CustomerComponent';

    customers: Customer[];
    selected: Customer;

    constructor(private router: Router, private customerService: CustomerService){};

    getCustomers(){
        this.customerService.getCustomers()
            .then(customers => this.customers = customers)
            .catch(error => console.log(error));
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    onSelect(customer: Customer){
        this.selected = customer;
    }

    gotoInvoices(){
        this.router.navigate(['sales-invoice/list/', this.selected.id]);
    }
}
