import { Inject, Injectable } from "@angular/core";
import { NgControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { IresStd, Istudent } from "../model/Istudent";




@Injectable({
    providedIn : 'root'
})
export class StudentService{

studentArr = [
  {
    stdId: 101,
    fname: "Rahul",
    lname: "Sharma",
    email: "rahul.sharma@example.com",
    contact: 9876543210,
    isActive: true
  },
  {
    stdId: 102,
    fname: "Priya",
    lname: "Patil",
    email: "priya.patil@example.com",
    contact: 9123456780,
    isActive: false
  }
];

//GET ALL
fetchAllStudent() : Observable<Istudent[]>{
  return of(this.studentArr)
}

removestd(id: number):Observable<IresStd>{
 let getIndex = this.studentArr.findIndex(t=>t.stdId === id)
 let arr =this.studentArr.splice(getIndex, 1)
 return of ({
  msg: `The todo item with id ${arr[0].stdId} is removed successfully..`,
  data : arr[0]
 })
}
}