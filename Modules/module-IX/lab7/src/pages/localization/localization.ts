import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs, Geolocation } from 'ionic-native';


/*
  Generated class for the Localization page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-localization',
  templateUrl: 'localization.html'
})
export class LocalizationPage {

  private setDataCoords: any = { latitude: '', longitude: '' };
  data: any = { latitude: '', longitude: '' };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello LocalizationPage Page');
  }

  ngOnInit() {
    Geolocation.getCurrentPosition().then(resp => {
      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;
      console.log('LATITUD ES: ' + this.setDataCoords.longitude);
      //this.storage.set("coords", this.setDataCoords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadConfirm() {
    Dialogs.confirm('Las coordenadas son:\n latitud' + this.setDataCoords.latitude, 'Confirmación', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));
  }

}
