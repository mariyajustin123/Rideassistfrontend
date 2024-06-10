import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from "@angular/common/http"
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  public loggedInSubject = new Subject()

  public refreshRequired= new Subject()

 

  constructor(private http:HttpClient) {

  }
// dependency induction

 

  getCustomers(){
    return this.http.get("http://127.0.0.1:8000/api/customers/")
  }
  
  retrieveCustomer(id:any){
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}/`)
  }

  createCustomer(data:any){
    return this.http.post("http://127.0.0.1:8000/api/customers/", data)
  }

  updateCustomer(id:any, data:any){
    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}/`, data)
  }

  deleteCustomer(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}/`)
  }
  getTokenPair(data:any){

    return this.http.post("http://127.0.0.1:8000/api/token/",data)

  }

  getAccessToken(){
    return localStorage.getItem("access")
  }

  getHeaders(){
    let token=this.getAccessToken()
    let headers=new HttpHeaders().set("Authorization", "Bearer " + token)

    return headers
  }

  isAuthenticated(){

    this.loggedInSubject.next("access" in localStorage? true:false)
    // return "access" in localStorage? true: false
  }
  createWork(id:any,data:any){



  return this.http.post(`http://127.0.0.1:8000/api/customers/${id}/work/,data`, {"headers":this.getHeaders()})

  }



 refreshWorkList(){

  this.refreshRequired.next(true)
}
}