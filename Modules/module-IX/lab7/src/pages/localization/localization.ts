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

  setDataCoords: any = { latitude: '', longitude: '' };
  data: any = { latitude: '', longitude: '' };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello LocalizationPage Page');
  }

  ngOnInit() {
    Geolocation.getCurrentPosition({enableHighAccuracy: true, maximumAge: 3000, timeout: 5000}).then(resp => {
      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadConfirm() {
    console.log('latitude: ' + this.setDataCoords.latitude);
    Dialogs.confirm('Las coordenadas son:\nLatitud: ' + this.setDataCoords.latitude +
    '\nLongitud: ' + this.setDataCoords.longitude, 'Confirmación', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));
  }
}
