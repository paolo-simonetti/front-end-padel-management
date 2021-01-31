import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notice } from '../classes/Notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  findAll():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.noticePackage+'/findAll');
  }

  insert(message:string):Observable<any> {
    return this.httpClient.post(environment.apiDocsBaseUrl+environment.adminApi+environment.noticePackage+'/insert',{
      "message":message
    });
  }

  update(dto:Notice):Observable<any> {
    return this.httpClient.put(environment.apiDocsBaseUrl+environment.adminApi+environment.noticePackage+'/update',{
      "id":dto.id,
      "message":dto.message,
      "creationDate":dto.creationDate
    });
  }

  delete(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set("noticeId",id.toString());
    return this.httpClient.delete(environment.apiDocsBaseUrl+environment.adminApi+environment.noticePackage+'/delete',{params});
  }

  findById(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set("noticeId",id.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.noticePackage+'/findById',{params});
  }


  constructor(private httpClient:HttpClient) { }
}
