import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';


let API_URL = "http://localhost:8082/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    return this.http.get<any> (API_URL + "api/user/login", {headers: headers})
    .pipe(map(response => {
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
      }
      return response;
    }));
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "api/user/logout", {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }));
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + "api/user/register", JSON.stringify(user),{headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "user/all"/*,{headers: {"Content-Type": "application/json; charset=UTF-8"}}*/);
  }

  /*findAllPostsOfUsers(username: string): Observable<any> {
    return this.http.get(API_URL + "user/" + username + "/posts", {headers:{"Content-Type": "application/json; charset=UTF-8"}});
  }*/

  findUser(username: string): Observable<any> {
    return this.http.get(API_URL  + "user/" + username/*, {headers: {"Content-Type": "application/json; charset=UTF-8"}}*/);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(API_URL + username, { responseType: 'text' });
  }

}