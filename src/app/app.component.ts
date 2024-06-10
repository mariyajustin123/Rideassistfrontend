import { Component } from '@angular/core';
import { RideService } from './ride.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RIDEASSISTFRONTEND';
  isLoggedIn:boolean = false

  constructor(private service:RideService){
    

  }
}
