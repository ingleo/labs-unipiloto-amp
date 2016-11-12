import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';

/*
  Generated class for the List2Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list2-detail',
  templateUrl: 'list2-detail.html'
})
export class List2DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello List2DetailPage Page');
    this.navParams.get("id");
  }
}
