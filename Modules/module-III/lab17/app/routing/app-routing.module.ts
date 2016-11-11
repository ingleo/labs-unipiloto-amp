import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductComponent } from '../component/product-list.component';
import { UserComponent } from '../component/user-list.component';

const routes: Routes = [ 
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductComponent},
    { path: 'user-list', component: UserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }