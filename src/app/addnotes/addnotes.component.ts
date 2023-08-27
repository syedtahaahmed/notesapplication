import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  alertmessage:any;
  priority:any;
  description:any


  constructor(private crudservie:CrudserviceService) { }

  ngOnInit(): void {
  }
  addNotes(){
    console.log(this.alertmessage)
    if(this.alertmessage==null || this.priority==null || this.description==null){
      alert("please enter all the field information")
      return
    }

    this.crudservie.addnote(this.alertmessage,this.priority,this.description).subscribe((res:any)=>{
      console.log(res)
      if(res.message=="Post added successfully"){
        alert("New note added to the day.")
        this.alertmessage=null
        this.priority=null
        this.description=null 
      }
    })
  }

}