import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemasComponent } from './cinemas/cinemas.component';

const routes: Routes = [
  { path: 'cinemas', component: CinemasComponent },
  { path: '', redirectTo: '/cinemas', pathMatch: 'full' }  // Optional default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
