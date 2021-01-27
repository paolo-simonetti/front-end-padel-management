import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url.toString()=='login'||route.url.toString()=='signup'||route.url.toString()=='internal-error') {
      return true;
    }
    return route.url.toString()==localStorage.getItem('role')||this.router.navigateByUrl('/'+localStorage.getItem('role')+'/home', 
      {state:{message:'You are not allowed to access to this page'}})
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.canActivate(route,state);
  }
  
}
