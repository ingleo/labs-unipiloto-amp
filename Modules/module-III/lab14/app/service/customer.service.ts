import { Injectable } from '@angular/core';
import { CUSTOMERS } from '../mock/customer-mock';
import { Customer } from '../model/customer';


@Injectable()
export class CustomerService{

    getCustomers(): Promise<Customer[]>{
        return Promise.resolve(CUSTOMERS);
    }

}