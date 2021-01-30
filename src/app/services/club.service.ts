import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Club } from '../classes/Club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  findAll():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.guestApi+'/findAllClubs');
  }

  findById(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set('id',id.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.guestApi+'/findById',{params});
  }

  joinClub(id:string,userLevel:number):Observable<any> {
    return this.httpClient.post<any>(environment.apiDocsBaseUrl+environment.guestApi+'/insertJoinProposal',{
      "id":id,
      "userLevel":userLevel
    });
  }

  constructor(private httpClient:HttpClient) { }
}
