import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'internal-error', canActivate:[AuthGuard], component:InternalErrorComponent},
  {path:'login', component:LoginComponent}, 
  {path:'signup', component:SignUpComponent},
  {path: 'superAdmin', canActivate:[AuthGuard], loadChildren: () => import('./super-admin/super-admin.module')
    .then(m => m.SuperAdminModule) },
  {path: 'guest', canActivate:[AuthGuard], loadChildren: () => import('./guest/guest.module')
    .then(m => m.GuestModule) },
  {path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule) },
    {path: 'player', canActivate:[AuthGuard], loadChildren: () => import('./player/player.module')
    .then(m => m.PlayerModule) },
  {path:'**', canActivate:[AuthGuard], component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
