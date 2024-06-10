import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup,Validators} from"@angular/forms"

@Component({
  selector: 'app-workcreate',
  templateUrl: './workcreate.component.html',
  styleUrls: ['./workcreate.component.css']
})
export class WorkCreateComponent implements OnInit{

  @Input() custId:any

  workForm=new FormGroup({

    title:new FormControl("",Validators.required),

    description:new FormControl("",Validators.required),

    amount:new FormControl("",Validators.required)


  })

  constructor( private service:RideService){
    // console.log("inside wrk create",this.custId);

  }

  ngOnInit() {

    console.log("Work list components",this.custId)
    
  }

handlesubmit(){

  let formData=this.workForm.value

  // console.log(formData)

  this.service.createWork(this.custId,formData).subscribe(data=>{

    console.log(data)

    this.service.refreshRequired

    this.workForm.reset()
  })
}
}