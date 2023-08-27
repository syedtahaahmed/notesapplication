import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { CRUDComponent } from './crud/crud.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { AuthguardService } from './authguard.service';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
    canActivate:[AuthguardService]

  },
  {path:'crud/:id',
component:CRUDComponent,
canActivate:[AuthguardService]

},

{path:'addnotes',component:AddnotesComponent,
canActivate:[AuthguardService]

}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
