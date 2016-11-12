import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { List2Page } from '../list2/list2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selected: any = false;

  product: Product = {
    id: 1,
    name: "Galaxy S7",
    type: "smartphone",
    price: 500000,
    quantity: 10
  }

  constructor(public navCtrl: NavController) {

  }

  loadInfo() {
    this.selected = true;
  }

  goList() {
    this.navCtrl.push(ListPage);
  }

  goListTwo(){
    this.navCtrl.push(List2Page);
  }
}

export class Product {
  id: number;
  name: string;
  type: string;
  quantity: number;
  price: number;
}