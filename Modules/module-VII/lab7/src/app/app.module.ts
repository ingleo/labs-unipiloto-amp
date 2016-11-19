import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { ProductPage } from '../pages/product/product';
import { UserService } from '../providers/user-service';  
import { ProductService } from '../providers/product-service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    UserPage,
    ProductPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    UserPage,
    ProductPage
  ],
  providers: [UserService, ProductService]
})
export class AppModule {}
