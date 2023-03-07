import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  responseData:any;
  getData(){
    let url = 'https://ipinfo.io/161.185.160.93/geo';
    return this.http.get(url);
  }
}
