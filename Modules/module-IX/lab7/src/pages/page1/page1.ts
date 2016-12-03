import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public network: string;

  constructor(public storage: Storage, public navCtrl: NavController) {
    
  }

  ngOnInit() {
   Network.onConnect().subscribe(() => {
      this.network = Network.connection;
      setTimeout(() => {
        if (Network.connection === 'wifi') {
          console.log(Network.connection);
        }
      }, 3000);
    });
    this.network = Network.connection;
    this.storage.set('net', this.network);
  }
}
