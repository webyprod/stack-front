import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';


let API_URL = "http://localhost:8082/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  login(credentials): Observable<any> {
    return this.http.post(API_URL + "auth/login", {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(API_URL + "auth/registration", {
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      skill: user.skill
    }, httpOptions);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "auth/logout", {})
    .pipe(map(response => {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }));
  }


  findAllUsers(page:number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + "users/all?page="+page,{headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findUser(username: string): Observable<User> {
    return this.http.get<User>(API_URL  + "user/" + username, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(API_URL + "user/" + username, { responseType: 'text' });
  }


      /*login(user: User): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    return this.http.get<any> (API_URL + "auth/login", {headers: headers})
    .pipe(map(response => {
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
      }
      return response;
    }));
  }*/

  /*register(user: User): Observable<any> {
    return this.http.post(API_URL + "auth/registration", user,{headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }*/


}