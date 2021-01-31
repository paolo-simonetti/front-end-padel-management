import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  findAllMatchesByDate(date:Date):Observable<any> {
    let params:HttpParams=new HttpParams().set("inputMessage",date.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/findAllMatchesByDate', {params});
  }

  findAll():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/findAllCourts');
  }

  dismiss(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set("courtId",id.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/cannotBeReserved', {params});
  }

  restore(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set("courtId",id.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/canBeReserved', {params});
  }

  findById(id:number):Observable<any> {
    let params:HttpParams=new HttpParams().set("courtId",id.toString());
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/findById', {params});
  }

  rename(id:number, newName:string):Observable<any> {
    return this.httpClient.put(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/renameCourt',{
      "id":id,
      "name":newName
    });
  }

  insert(name:string):Observable<any> {
    return this.httpClient.post<any>(environment.apiDocsBaseUrl+environment.adminApi+environment.courtsPackage+'/insertCourt',{
      "name":name
    });
  }

  constructor(private httpClient:HttpClient) { }
}
