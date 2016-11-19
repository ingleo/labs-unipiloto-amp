import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from '../../providers/product-service';
import { StorageService } from '../../providers/storage-service';

/*
  Generated class for the List2Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list2-detail',
  templateUrl: 'list2-detail.html',
  providers: [ProductService]
})
export class List2DetailPage {

  product: Product = {id:0,name:"",type:"",price:0,quantity:0};
  idProduct: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService, private storageService: StorageService) {

    console.log('Constructor!!!');

  }

  ionViewDidLoad() {
    console.log('Hello List2DetailPage Page');
    
    this.idProduct = this.storageService.getItemToStorage('idkey');
    //this.idProduct = this.navParams.get("id");
    //alert(this.idProduct);
    this.getProductDetail(Number(this.idProduct));
  }

  getProductDetail(idProduct: number) {
    this.productService.getProductDetail(idProduct)
      .subscribe(
      product => {
        this.product = product;
        console.log(this.product);
      },
      error => {
        console.log(error);
      }
      );
  }
}
