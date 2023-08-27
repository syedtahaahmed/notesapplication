import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs-compat/operator/elementAt';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  notes=[
    {createddate:"1-1-2023",description:"mynotes",priority:1,alertmessage:"notes1",id1:0},
    {createddate:"1-2-2023",description:"my next notes",priority:2,alertmessage:"notes2",id1:1},
    {createddate:"1-3-2023",description:"my next to next notes",priority:3,alertmessage:"notes3",id1:2}
  
  ]
  constructor(private http:HttpClient) { }

  updatenotes(id,alertmessage,description,priority){
    console.log(description)
    this.notes.forEach(element => {
      if(element.id1==+id){
        this.notes[element.id1].description=description;
        this.notes[element.id1].alertmessage=alertmessage;
        this.notes[element.id1].priority=priority
      }
    });
  }
  deletenotes(id){
    console.log("id in deletenotes",id)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("token")}` });
  let options = { headers: headers };
    var x=this.http.delete(`http://localhost:3000/api/posts/${id}`,options)
    return x
  }
  addnote(alert,priority,description){
    var ele={
      createddate:new Date().toISOString().toString(),description:description,priority:priority,alertmessage:alert,id1:this.notes.length+1
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("token")}` });
  let options = { headers: headers };

   var x= this.http.post("http://localhost:3000/api/posts",ele,options)
    this.notes.push(ele)
console.log(this.notes)
return x;
  }
  signup(username,password){
    var x=this.http.post("http://localhost:3000/api/user/signup",{email:username,password:password})
    return x;
  }
  login(username,password){
    var x=this.http.post("http://localhost:3000/api/user/login",{email:username,password:password})
return x;

  }
  getNotes(){
      var ele={
        "pagesize":10,
        "page":1
      }
  
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}` });
    let options = { headers: headers };
  
     var x= this.http.get("http://localhost:3000/api/posts?pagesize=10&page=1",options)
  return x;
    }
}
