import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public network: string;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
    Network.onConnect().subscribe(() => {
      this.network = Network.connection;
      alert(this.network);
      setTimeout(() => {
        if (Network.connection === 'wifi') {
          console.log(Network.connection);
        }
      }, 3000);
    });
  }

}
