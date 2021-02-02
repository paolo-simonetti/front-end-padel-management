import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsertMatchDTO } from '../messages/InsertMatchDTO';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  insert(insertMatchDTO:InsertMatchDTO):Observable<any> {
    return this.httpClient.post(environment.apiDocsBaseUrl+environment.playerApi+environment.padelMatchPackage+'/insert',{
      "courtId":insertMatchDTO.courtId,
      "hour":insertMatchDTO.hour,
      "minute":insertMatchDTO.minute,
      "durationHour":insertMatchDTO.durationHour,
      "durationMinute":insertMatchDTO.durationMinute,
      "missingPlayers":insertMatchDTO.missingPlayers,
      "date":insertMatchDTO.date
    })
  }

  update(courtId:number,matchId:number, missingPlayers:number):Observable<any> {
    return this.httpClient.put(environment.apiDocsBaseUrl+environment.playerApi+environment.padelMatchPackage+'/update',{
      "courtId":courtId,
      "missingPlayers":missingPlayers,
      "matchId":matchId
    })
  }

  findAllByPlayer():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.playerApi+environment.padelMatchPackage+'/find-all-by-player');
  }

  delete(id:string):Observable<any> {
    let params:HttpParams=new HttpParams().set("matchId",id);
    return this.httpClient.delete(environment.apiDocsBaseUrl+environment.playerApi+environment.padelMatchPackage+'/delete', {params});
  }

  findAllMatchesByDate(date:Date):Observable<any> {
    return this.httpClient.post(environment.apiDocsBaseUrl+environment.playerApi+environment.padelMatchPackage+'/find-all-by-date', {
      "date":date
    })
  }

  constructor(private httpClient:HttpClient) { }
}
