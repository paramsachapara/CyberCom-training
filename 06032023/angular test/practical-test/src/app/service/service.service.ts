import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }
  getData(){
    return this._http.get('https://ipinfo.io/161.185.160.93/geo')
  }
}
