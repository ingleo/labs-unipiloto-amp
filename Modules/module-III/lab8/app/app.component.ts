import { Component } from '@angular/core';

 export class Ride {
 	festive : number;
    airport : number;
    app_pip : number;
    units : number;
    default : number;
    total : number;
 }

@Component({
  selector: 'my-app',
	templateUrl : 'app/templates/ride.html'

})
export class AppComponent {
	ride : Ride  = {
		festive : 1900,
        airport : 3900,
        app_pip : 700,
        units : 50,
        default : 4100,
        total : 0
	}

    selected: Ride;

    onSelect(ride: Ride) {
		this.selected = ride;      
	}

	title: string = "Mi viaje";

}
