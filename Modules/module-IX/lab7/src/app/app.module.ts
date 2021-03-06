import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LocalizationPage } from '../pages/localization/localization';
import { NetworkInfoPage } from '../pages/network-info/network-info';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LocalizationPage,
    NetworkInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LocalizationPage,
    NetworkInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
