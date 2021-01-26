import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'home', canActivate:[AuthGuard], component:HomepageComponent},
  {path:'internal-error', canActivate:[AuthGuard], component:InternalErrorComponent},
  {path:'login', component:LoginComponent}, 
  {path:'signup', component:SignUpComponent},
  {path:'**', canActivate:[AuthGuard], component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
