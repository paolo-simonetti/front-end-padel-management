import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  hasPendingProposals():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.guestApi+'/hasPendingProposals');
  }

  constructor(private httpClient:HttpClient) { }
}
