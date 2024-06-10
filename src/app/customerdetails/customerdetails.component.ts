import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  customer:any

  constructor(private router:ActivatedRoute,private service:RideService){

    let id=this.router.snapshot.params["id"]

    this.service.retrieveCustomer(id).subscribe(data=>{

      console.log(data)

      this.customer=data
    })
  }

}
