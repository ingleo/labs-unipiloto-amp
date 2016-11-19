import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import { ProductService } from '../providers/product-service';
import { List2DetailPage } from '../pages/list2-detail/list2-detail';
import { StorageService } from '../providers/storage-service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List2DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List2DetailPage
  ],
  providers: [ProductService, Storage, StorageService]
})
export class AppModule { }
