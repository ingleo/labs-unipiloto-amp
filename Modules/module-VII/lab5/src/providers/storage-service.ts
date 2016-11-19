import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello StorageService Provider');
  }

  setItemToStorage(key: string, value: any) {
    this.storage.set(key, value).then(() => {
      console.log('Value has been set');
    });
  }

  getItemToStorage(key: string): any{
    this.storage.get(key).then((item) => {
      let id: any = item;
      console.log('Id is: '+ id);
    });
  }

}
