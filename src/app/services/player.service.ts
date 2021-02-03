import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../classes/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  get():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.playerApi+environment.memberPackage+'/get');
  }

  update(player:Player):Observable<any> {
    return this.httpClient.put(environment.apiDocsBaseUrl+environment.playerApi+environment.memberPackage+'/update',{player})
  }

  abandonClub():Observable<any> {
    return this.httpClient.delete(environment.apiDocsBaseUrl+environment.playerApi+environment.memberPackage+'/abandon-club');
  }

  constructor(private httpClient:HttpClient) { }
}
