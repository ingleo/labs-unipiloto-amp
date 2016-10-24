import { Component } from '@angular/core';
import { Product } from '../model/product';
import { User} from '../model/user';

@Component({
  selector: 'my-app',
  /*template: '<h1>{{product.id}}</h1><br />' + 
  			'<h2>{{product.name}}</h2><br />' +
  			'<h2>{{product.description}}</h2><br />' +
  			'<h2>{{product.type}}</h2><br />' +
  			'<h2>{{product.price}}</h2><br />' +
  			'<h2>{{product.quantity}}</h2><br />' + 
        '<br />' +
        '<h2>{{user.name}}</h2><br />' +
        '<h2>{{user.id}}</h2><br />' +
        '<h2>{{user.address}}</h2><br />'+
        '<h2>{{user.phone}}</h2><br />'
	*/
	templateUrl : 'app/templates/product.html'

})

export class AppComponent {
	product: Product = {
		id: 1,
		name: "Galaxy S7",
		description: "Granada de mano",
		type: "smartphone",
		price: 500000,
		quantity: 10
	}

  user : User = {
		id : 1,
    name : "Leonardo",
    address : "calle 123",
    phone : 1234566
  }

//creación de una variable de tipo arreglo de productos y un titulo 
	title: string = "Mis productos";
	products: Product[] = PRODUCTS;
	users : User[] = USERS;


selected: Product;

onSelect(product: Product) {
		this.selected = product;
}

}

//Arreglo de objetos de producto
const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 30
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 3500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 2500000,
        quantity: 10
    }
];

//Arreglo de objetos de usuario

const USERS : User[] = [
	{
        id : 1,
        name : "Leonardo",
        address : "calle 123",
        phone : 1234566
	},
	{
        id : 2,
        name : "Carlos",
        address : "calle 456",
        phone : 876543
	}
];