import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO, SignupDTO } from '../messages/AuthorizationDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginDTO:LoginDTO):Observable<any> {
    return this.httpClient.post<any>(environment.apiDocsBaseUrl+environment.authorizationApi+'/login', 
      {"username":loginDTO.username, "password":loginDTO.password})
             
  }

  signup(signupDTO:SignupDTO):Observable<any> {
    return this.httpClient.post<any>(environment.apiDocsBaseUrl+environment.authorizationApi+'/signup', 
      {
        "username":signupDTO.username,
        "password":signupDTO.password, 
        "dateOfBirth":signupDTO.dateOfBirth,
        "mailAddress":signupDTO.mailAddress,
        "name":signupDTO.name,
        "surname":signupDTO.surname,
        "mobile":signupDTO.mobile,
        "proPic":signupDTO.proPic
      })
      
  }

  userAlreadyExists(username:string):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    };    
    let result:any=this.httpClient.post<any>(environment.apiDocsBaseUrl+environment.authorizationApi+
      '/findAllUsernames', 
    {
      "request":username
    }, httpOptions)
    return result;
  }
            
  saveToken(token:string, role:string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }          
  
  logout() : Observable<any> {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return this.httpClient.get<any>(environment.apiDocsBaseUrl+environment.authorizationApi+'/logout');
  }

  constructor(private httpClient:HttpClient) { }
}
