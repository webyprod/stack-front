import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

let API_URL = "http://localhost:8082/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  findAllPosts(): Observable<any> {
    return this.http.get(API_URL + "posts/all", {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findPost(id: number): Observable<any>{
    return this.http.get(API_URL + "post/" + id, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  savePost(data: object): Observable<Object> {
    return this.http.post(API_URL + "post/new", data)
  }

}