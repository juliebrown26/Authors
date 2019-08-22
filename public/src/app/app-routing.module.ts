import { AuthorsComponent } from './authors/authors.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'authors',component: AuthorsComponent },
  { path: 'new',component: AddComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/authors'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
