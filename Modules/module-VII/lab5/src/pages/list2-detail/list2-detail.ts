import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from '../../providers/product-service';

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

  product: Product;
  idProduct: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {

    console.log('Constructor!!!');

  }

  ionViewDidLoad() {
    console.log('Hello List2DetailPage Page');
    this.idProduct = this.navParams.get("id");
    alert(this.idProduct);
    this.getProductDetail(this.idProduct);
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
