import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})

  export class WorkListComponent implements OnInit {

    works:any
  
    total:any
  
    @Input() custId:any
  
    constructor(private service:RideService){
  
      this.service.refreshRequired.subscribe(data=>{
  
        this.ngOnInit()
      })
      
      
    }
    ngOnInit(): void{
  
      console.log("inside wrk create",this.custId);
  
      this.service.retrieveCustomer(this.custId).subscribe((data:any)=>{
  
        this.works=data?.works
  
        this.total=data?.work_total
      
      })
    }
  
  }