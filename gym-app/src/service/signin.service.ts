import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CredentialsDto} from "../app/model/CredentialsDto";
import {UpdatePassword} from "../app/model/UpdatePassword";


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseUrl = "http://localhost:8081/gym/user";
  constructor(private httpclient:HttpClient) {
  }
  userAuthentication(credentials: CredentialsDto): Observable<boolean> {
    const url = `${this.baseUrl}/authentication`;
    return this.httpclient.post<boolean>(url, credentials);
  }
  updateCredentials(updatePassword:UpdatePassword): Observable<any> {
    const url = `${this.baseUrl}/updatePassword`;
    return this.httpclient.put<any>(url,updatePassword);
  }
}
