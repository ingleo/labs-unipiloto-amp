import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Network } from 'ionic-native';
import { Storage } from '@ionic/storage';

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

  public network: string;

  constructor(public storage: Storage, public navCtrl: NavController) {

  }

   ngOnInit() {
 
      this.storage.get('net').then(res => {
        this.network = res;
      })
  }
}
