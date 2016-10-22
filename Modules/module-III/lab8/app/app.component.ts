import { Component } from '@angular/core';
import { Ride } from './model/ride';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'

})
export class AppComponent {
  ride: Ride = {
    festive: 1900,
    airport: 3900,
    app_pip: 700,
    units: 50,
    default: 4100,
  }

  title: string = "Mi viaje";
  total: number = this.getTotal(this.ride);


  getTotal(ride: Ride): number {
    var unitCost: number;
    const MIN_UNITS: number = 50;
    const DEF_VALUE: number = 4100;

    if (ride.units <= MIN_UNITS) {
      unitCost = DEF_VALUE;
    } else {
      unitCost = (ride.units * DEF_VALUE) / MIN_UNITS;
    }

    this.ride.default = unitCost;
    this.total = Number(ride.festive) + Number(ride.airport) + Number(ride.app_pip) + unitCost;
    return this.total;
  }
}
