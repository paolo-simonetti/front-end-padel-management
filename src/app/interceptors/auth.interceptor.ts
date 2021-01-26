import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') || '';
    const httpRequest = req.clone({
        headers: req.headers.append('Authorization', 'Bearer '+token)
    });
        
    return next.handle(httpRequest).pipe(
        catchError((err: any) => {
            if (err.status == 401) {
                localStorage.clear();
            } else if (err.status == 403) {
                localStorage.clear();
            }
             else if(err.status ==500) {
                this.router.navigateByUrl('/internal-error')
            }
            return throwError(err);
        })
    );
  }
}
