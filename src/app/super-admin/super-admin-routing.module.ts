import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
  {path:'home', canActivate:[AuthGuard], component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
