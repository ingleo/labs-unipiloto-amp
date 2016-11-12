import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { Product } from '../../model/product';
import { List2DetailPage } from '../list2-detail/list2-detail';

/*
  Generated class for the List2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})

export class List2Page {

  products: Product[];

  constructor(public navCtrl: NavController, private productService: ProductService) {}

  ionViewDidLoad() {
    console.log('Hello List2Page Page');
    this.getProducts();
  }

  getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },
            error => {
                console.log(error);
            }
        );
    }

    goToDetail(product: Product){
      this.navCtrl.push(List2DetailPage, {id:product.id});
    }
}
