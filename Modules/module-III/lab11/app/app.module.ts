import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
