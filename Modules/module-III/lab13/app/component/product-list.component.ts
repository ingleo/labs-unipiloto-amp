import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {PRODUCTS} from "../mock/product-mock";

@Component({
	selector: 'product-list',
	templateUrl: 'app/templates/product-list.html'
})

export class ProductListComponent {
	title: string = "Mis Productos";

	products: Product[] = PRODUCTS;
	
}