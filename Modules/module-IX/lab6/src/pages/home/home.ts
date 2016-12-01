import { Component } from '@angular/core';
import { StorageService } from '../../providers/storage-service';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];

  constructor(public navCtrl: NavController, public storageService: StorageService, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.storageService.getAll()
      .then(products => {
        console.log(products);
        this.products = products;
      })
  }

  alertNewProduct() {
    let alert = this.alertCtrl.create({
      title: 'Crear Producto',
      message: 'Nombre del Producto',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nuevo Producto.',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: data => {
            data.completed = false;
            this.storageService.create(data)
              .then(response => {
                this.products.unshift(data);
              })
              .catch(error => {
                console.error(error);
              })
          }
        }
      ]
    });
    alert.present();
  }

  updateProduct(product, index) {
    console.log("event");
    product = Object.assign({}, product);
    this.storageService.update(product)
      .then(response => {
        this.products[index] = product;
      })
      .catch(error => {
        console.error(error);
      })
  }

}
