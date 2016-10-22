import { Component } from '@angular/core';

 export class Ride {
 	festive : number;
    airport : number;
    app_pip : number;
    units : number;
    default : number;
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
	}

  total : number = this.getTotal(this.ride);


  getTotal(ride: Ride) : number{
    var unitCost : number;
    var minUnits : number = 50;
    var defaultValue : number = 4100;

    if(ride.units <= minUnits){
      unitCost = ride.default;
    }else{
      unitCost = (ride.units * defaultValue) / minUnits;
    }

    this.ride.default = unitCost;
		this.total = Number(ride.festive) + Number(ride.airport) + Number(ride.app_pip) + unitCost;
    console.log('XXXXX ' + this.total);
    return this.total;
	}


	title: string = "Mi viaje";

}
