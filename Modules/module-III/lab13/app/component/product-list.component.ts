import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from "../service/product.service";
import { Router } from "@angular/router";

@Component({
	selector: 'product-list',
	templateUrl: 'app/templates/product-list.html',
	providers: [ProductService]
})

export class ProductListComponent implements OnInit {

	title: string = "Mis Productos";
	products: Product[];
	selected_product: Product;

	constructor(private router: Router, private productService: ProductService) { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		this.productService.getProducts()
			.then(products => this.products = products)
			.catch(error => console.log(error));
	}

	onSelect(product: Product) {
		this.selected_product = product;
	}

	gotoDetail(): void {
		this.router.navigate(['product/detail/', this.selected_product.id]);
	}
}