import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  product: Product = {
    id: 1,
    name: "Galaxy S7",
    type: "smartphone",
    price: 500000,
    quantity: 10
  }

  constructor(public navCtrl: NavController) {

  }

}

export class Product {
  id: number;
  name: string;
  type: string;
  quantity: number;
  price: number;
}