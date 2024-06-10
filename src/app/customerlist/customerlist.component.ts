import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
  customers:any

  constructor(private service:RideService){

    this.ngOnInit()

   }



  ngOnInit(){

    this.service.getCustomers().subscribe(data=>this.customers=data)
 }



  handleDelete(id:any){

    this.service.deleteCustomer(id).subscribe(data=>{

      // console.log(data);

      this.ngOnInit()
    })


  }
generatepdf(id:any){
  let customerdetail=this.customers.find((cust:any)=>cust.id==id)
  let body=[] 
  for  (let  work of customerdetail.works){body.push([work.title,work.description,work.amount])}
  const doc = new jsPDF()
  autoTable(doc, {
    head: [['title', 'description', 'amount']],
    body: body
    
      // ...
    
  })
  doc.text("invoice",20,20)
  doc.save('table.pdf')


}

}