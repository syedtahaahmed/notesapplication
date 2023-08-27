import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private router:Router,private crduservice:CrudserviceService) { }
notes:any;
  ngOnInit(): void {
    this.crduservice.getNotes().subscribe((res:any)=>{
console.log(res.posts)
      this.notes=res.posts
    })
  }
  mj(e,i){
    console.log("id is "+i)
    this.router.navigate([`crud/${i}`])
    console.log(i)
    console.log("clilcled")
    console.log(e)
  }
}
