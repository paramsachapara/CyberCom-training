import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { UserModel } from '../models/user.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  baseURL = environment.base_url;
  usersURL = environment.users_list_url;
  postuserURL = environment.post_user_url;

  postUserData(body:UserModel){
    try {
      return this.http.post<any>(this.baseURL+this.postuserURL,body)
    } catch (error:any) {
      return throwError(()=> new Error(error))
    }
  }
  getUsersById(id: string){
    try {
      return this.http.get<any>(this.baseURL + this.usersURL+"/"+id, {
        headers: {
          key:"vvv"
        }
      });
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }


  getUsers() {
    try {
      return this.http.get<any>(this.baseURL + this.usersURL, {
        headers: {
          key:"vvv"
        }
      });
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
  updateUser(body:UserModel,id:any){
    try {
      return this.http.put<any>(this.baseURL+this.postuserURL+"/"+id,body)
    } catch (error:any) {
      return throwError(()=>new Error (error))
    }
  }
  deleteUser(id:any){
    try {
      return this.http.delete<any>(this.baseURL+this.postuserURL+"/"+id)
    } catch (error:any) {
      return throwError(()=> new Error(error))
    }

  }


}
