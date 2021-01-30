import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HasPendingProposalsGuard implements CanActivate {
  

  constructor(private userService:UserService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let hasPendingProposals:string;
    this.userService.hasPendingProposals().subscribe((result)=>hasPendingProposals=result.message); 
    return !!localStorage.getItem('token')||this.router.navigateByUrl('/guest/home', {state:{data:hasPendingProposals}});
  }
  
}
