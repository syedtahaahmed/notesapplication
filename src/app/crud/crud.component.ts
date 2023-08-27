import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  notes=[]
  alertmessage:any;
  id:any
  description:any;
  priority:any;
  selectednote:any
  constructor(private crudservice:CrudserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.crudservice.getNotes().subscribe((res:any)=>{
      this.notes=res.posts
      console.log(this.notes)
      this. id=this.route.snapshot.paramMap.get('id')
      console.log(this.id+"hhh")
      this.selectednote=this.notes.find(x=>x._id==this.id)
      console.log(this.selectednote)
      this.alertmessage=this.selectednote.alertmessage
      this.description=this.selectednote.description
      this.priority=this.selectednote.priority
    })
}
onItemChange(event){
  console.log("ietmc chan")
  console.log(event)
}
update(operation){
  console.log(this.alertmessage+"eee")
  if(operation=="update"){
    this.crudservice.updatenotes(this.id,this.alertmessage,this.description,this.priority)
    alert("updated succesfuly")
  }else{
    this.crudservice.deletenotes(this.id).subscribe((res:any)=>{
      console.log(res)
      alert("deleted succesfuly")
    })


  }
  this.router.navigate(['/notes'])
}


}
