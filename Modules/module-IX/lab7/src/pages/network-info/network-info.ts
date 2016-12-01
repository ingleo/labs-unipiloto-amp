import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NetworkInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network-info',
  templateUrl: 'network-info.html'
})
export class NetworkInfoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NetworkInfoPage Page');
  }

}
