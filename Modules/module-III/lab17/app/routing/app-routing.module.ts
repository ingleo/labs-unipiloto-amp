import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductComponent } from '../component/product-list.component';

const routes: Routes = [ 
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }