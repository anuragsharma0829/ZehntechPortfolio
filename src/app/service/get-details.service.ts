import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  // baseurl="http://localhost:8080"

  constructor(private _http: HttpClient) { }

  public setDetails(contact: any) {
    return this._http.post(`${baseUrl}/contact/`, contact)
  }

}

